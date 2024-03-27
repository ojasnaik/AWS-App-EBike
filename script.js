AWS.config.region = 'us-east-2'; // Region

function uploadFile(file) {
  const s3 = new AWS.S3({
    apiVersion: '2006-03-01',
    params: { Bucket: 'ebike-s3' },
  });

  // Use S3 ManagedUpload class to upload the file
  const upload = new AWS.S3.ManagedUpload({
    params: {
      Bucket: 'ebike-s3',
      Key: file.name,
      Body: file,
      ACL: 'public-read', // Or another ACL according to your requirements
      ContentType: file.type,
    }
  });

  const promise = upload.promise();

  promise.then(
    function(data) {
      console.log("Successfully uploaded photo.");
      alert("Successfully uploaded photo.");
    },
    function(err) {
      console.log("There was an error uploading your photo: ", err.message);
      alert("There was an error uploading your photo: " + err.message);
    }
  );
}

document.getElementById('uploadForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const files = document.getElementById('imageInput').files;
  if (files.length > 0) {
    const file = files[0];
    uploadFile(file);
  }
});
