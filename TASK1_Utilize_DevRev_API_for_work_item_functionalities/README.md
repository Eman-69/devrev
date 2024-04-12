
# TASK 1 Utilizing the DevRev API for Work item functionalities



## Work Create

INPUT: 
issue/ticket,
display_id of applies_to_part,
id of owned_by,
Title of workitem




## Run Locally

```bash
node work-create.js
```


## Input

![App Screenshot](Screenshots/work-create.png)





## Output



```bash
  data: {
    work: {
      type: 'issue',
      applies_to_part: [Object],
      created_by: [Object],
      created_date: '2024-04-12T07:09:01.631Z',
      custom_fields: null,
      display_id: 'ISS-26',
      id: 'don:core:dvrv-us-1:devo/1175dK9kvs:issue/26',
      modified_by: [Object],
      modified_date: '2024-04-12T07:09:01.631Z',
      owned_by: [Array],
      priority: 'p2',
      stage: [Object],
      stock_schema_fragment: 'don:core:dvrv-us-1:stock_sf/110623',
      title: 'work-10'
    }
  }
```

