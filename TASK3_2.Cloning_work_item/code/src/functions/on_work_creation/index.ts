import { client, publicSDK } from "@devrev/typescript-sdk";

// function searchWork(works:any[],value:any)
// {
//   return works.filter(item => item["id"] === value);
// }
export async function handleEvent(
  event: any,
) {
  const devrevPAT = event.context.secrets.service_account_token;
  const APIBase = event.execution_metadata.devrev_endpoint;

  const devrevSDK = client.setup({
    endpoint: APIBase,
    token: devrevPAT,
  })
  const searchedID = event.payload.work_created.work;
  const applies_to_part = searchedID["applies_to_part"].display_id;
  const owned_by = (searchedID.owned_by as any[]).map(item => item.id);
  const title=searchedID.title;
  let type:any;
  if(searchedID.type=='issue')
    type=publicSDK.WorkType.Issue;
  else
    type=publicSDK.WorkType.Ticket;
    
    
  const data={   applies_to_part: applies_to_part,
    owned_by: owned_by,
    title: title,
    type:type}
  try {
    const response = await devrevSDK.worksCreate(data,undefined);
    if(response.status==200)
      return response;
  } catch (error) {
    console.log(error);
    return error;
  }
  
}


export const run = async (events: any[]) => {
  /*
  Put your code here to handle the event.
  */
 
  for (let event of events) {
    const res=await handleEvent(event);
    console.log(res);
    
  }
};

export default run;
