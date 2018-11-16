
// select input element where type is file
const input = document.querySelector('input[type="file"]');
// make FormData -object
const data = new FormData();
// add file to FormData -object.
// Note that 'files' is an FileList object. This means that you can upload multiple files.
data.append('fileToUpload', input.files[0]);
// make an object for settings
const settings = {
    method: 'POST',
    // credentials: 'same-origin', // this might be needed for some servers
    body: data
};
// initiate fetch. In this example the server responds with text.
// Response could also be json. Then you would use response.json()
fetch('url_to_server', settings).then((response) => {
    return response.json();
}).then((json) => {
    console.log(json);
});