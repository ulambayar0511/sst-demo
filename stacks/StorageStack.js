import * as sst from "@serverless-stack/resources";

export default class StorageStack extends sst.Stack {
  // Public reference to the table
  table;
  
  bucket;
  // Create an S3 bucket
  
  constructor(scope, id, props) {
    super(scope, id, props);

    // Create the DynamoDB table
    this.table = new sst.Table(this, "Notes", {
      fields: {
        userId: sst.TableFieldType.STRING,
        noteId: sst.TableFieldType.STRING,
      },
      primaryIndex: { partitionKey: "userId", sortKey: "noteId" },
    });
    // Public reference to the bucket

    this.bucket = new sst.Bucket(this, "Uploads");

  }
}