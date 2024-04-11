import { client, publicSDK } from "@devrev/typescript-sdk";

export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const APIBase = event.execution_metadata.devrev_endpoint;
  const devrevSDK = client.setup({
    endpoint: APIBase,
    token: devrevPAT,
  })
  const workCreated=event.payload.work_created.work;
  const messageInput=event.input_data.global_values.input_field_1;
  let bodyComment = 'Hello World is displayed on work ' + workCreated.display_id + ' from the automation, with message: ' + messageInput;
  const extraComments=event.input_data.global_values.input_field_2;
  const extraNames=event.input_data.global_values.input_field_array;
  if(extraComments)
    {
      for(let name of extraNames)
        {
          bodyComment=bodyComment+' '+name;
        }
    }
  const body={
      object:workCreated.id,
      type:'timeline_comment',
      body:bodyComment
  }
  try {
    const response = await devrevSDK.timelineEntriesCreate(body as any);
    return response;
  } catch (error) {
    console.log(error);
    return error;
  }
}

export const run = async (events: any[]) => {
  
  console.log('events',JSON.stringify(events),'\n\n\n');
  
  for (let event of events) {
    const res=await handleEvent(event);
    console.log(JSON.stringify(res));
  }
};

export default run;
