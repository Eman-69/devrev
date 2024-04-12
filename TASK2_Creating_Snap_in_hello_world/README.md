
# TASK 2 Creating Snap in hello world


## How to initialize Devrev SDK, build, deploy 

## Create DevRev Snaps TypeScript Template
```
devrev snap_in_version init

```

This repository contains a template for the functions that can be deployed as
part of Snap-Ins.

### Getting started with the template
1. Create a new repository from this template.
2. In the new repository, you can add functions at path `src/functions` where the folder name corresponds to the function name in your manifest file.
3. Each function you add will also need to be mentioned in `src/function-factory.ts` .

### Testing locally
You can test your code by adding test events under `src/fixtures` similar to the example event provided. You can add keyring values to the event payload to test API calls as well.

Once you have added the event, you can test your code by running:
```
npm install
npm run start:watch -- --functionName=function_1 --fixturePath=function_1_event.json
npm run start:watch -- --functionName=function_2 --fixturePath=function_2_event.json
```

### Adding external dependencies
You can also add dependencies on external packages in package.json under the "dependencies" key. These dependencies will be made available to your function at runtime and testing.

### Packaging the code
Once you are done with the testing,
Run
```
npm install
npm run build
npm run package
```
and ensure it succeeds.

You will see a `build.tar.gz` file is created and you can provide it while creating the snap_in_version.

## Function 1 


```bash
-Works when there is a work item data available 
-Works when we create an issue or ticket 
-DevRev displays a Hello world message to the new work item
```
    
## Main Part of Function 1



```bash
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
```


##Result

![App Screenshot](Screenshots/pic.png)


