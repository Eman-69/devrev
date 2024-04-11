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
  const workCreated=event.payload.source_id;
  const bodyComment="Hello World";
  const body={
    object:workCreated,
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
  console.info('events',JSON.stringify(events),'\n\n\n');
  for (let event of events) {
    const res=await handleEvent(event);
    console.log(JSON.stringify(res));
    
  }
};

export default run;
