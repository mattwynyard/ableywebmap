const buildingPopup = {
    "title": "{name}",
    "content": [{
      "type": "fields",
      "fieldInfos": [
        {
          "fieldName": "building_id",
          "label": "Id",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "suburb_locality",
          "label": "Suburb",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "town_city",
          "label": "Town/City",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "use_",
          "label": "Use",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "territorial_authority",
          "label": "Territorial Authority",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        }
    ]
    }]
  }

  const titlePopup = {
    "title": "Title {title_no}",
    "content": [{
      "type": "fields",
      "fieldInfos": [
        {
          "fieldName": "status",
          "label": "Status",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "type",
          "label": "Type",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "land_district",
          "label": "Land District",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "issue_date",
          "label": "Issue Date",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        },
        {
          "fieldName": "estate_description",
          "label": "Estate Description",
          "isEditable": false,
          "visible": true,
          "format": null,
          "stringFieldOption": "text-box"
        }
    ]
    }]
  }

  export {buildingPopup, titlePopup}