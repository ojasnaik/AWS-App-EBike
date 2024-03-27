document.getElementById('uploadForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const files = document.getElementById('imageInput').files;
    const fileArray = Array.from(files);
    
    console.log("Files selected for upload:", fileArray);


    alert("See console for selected files. Implement AWS S3 upload functionality on the server-side or use AWS Amplify.");
});
