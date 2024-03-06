# Part 2: File Upload to S3 Description

## Table of Contents
- [Objective](#objective)
- [General Components](#defining-general-components)
- [User Interaction](#describing-user-interaction)
- [Frontend File Upload Steps](#describing-frontend-file-upload-steps)
- [Communication with Backend](#describing-communication-with-backend)
- [Backend Role](#describing-backend-role)
- [Backend to S3 Upload](#describing-backend-to-s3-upload)
- [Handling Large Files Efficiently](#describing-how-handle-large-files-efficiently)
    - [Multi-part Upload](#multi-part-upload)
    - [Compression Techniques](#use-compression-techniques)
- [Error Handling](#describing-error-handling)
- [Secure Upload Process](#making-secure-the-upload-process)


### **Objective**

Describe the process and structure of uploading big (50MB-1GB) PDF files from a client computer to an AWS S3 storage system.

The system must be able to identify the file later on - e.g. who uploaded the file, when it was uploaded, etc.

> **NOTE**: this task does not require any coding - a textual description would be enough.


## **Solution:**

#### Defining general components:
   - **Frontend**: A web interface where users can select and initiate the upload process.
   - **Backend**: Utilizes AWS Lambda functions to handle file uploads, application responsible for receiving the file from the frontend, processing it, and uploading it to S3. 
   - **AWS S3**: The storage system where the files will be stored.

#### Describing user interaction:
   - Users interact with the frontend by accessing a web page where they can select the file to upload.
   - When users upload a file, the backend triggers a notification event. This event sends a message to an AWS SQS queue. A notification service reads this queue and sends email notifications to the users using a mail server. Once sent, the message is marked as processed.

#### Describing frontend file upload steps:
   - Users select the file and click the upload button.
   - During the upload process, the frontend displays progress indicators to show the upload status.

#### Describing communication with backend
   - After selecting the file, the frontend sends a request to the backend to initiate the upload process.
   - The frontend may also send metadata along with the file, such as user information and upload timestamp.

#### Describing backend role:
   - The backend receives the file from the frontend and performs any necessary validations, such as checking file size or format.
   - It creates a unique ID for each file by combining a hash of the username and user data with a timestamp. This ID is stored in a database for reference and helps prepare the file for upload to S3.

#### Describing backend to S3 upload:

After receiving the file from the frontend, the backend triggers an AWS Lambda function, Lambda handles upload to S3, ensuring scalability and cost-effectiveness. This function can be invoked synchronously or asynchronously.


> **Synchronous Invocation:** The function runs immediately, and the caller waits for its response. This is useful when an immediate response is needed.

> **Asynchronous Invocation:** The function runs in the background, and the caller can continue without waiting. This is handy for tasks that don't require an immediate response or may take time to complete, like uploading large files.

The Lambda function receives the file data along with any metadata from the backend. Metadata may include user information (e.g., user ID), upload timestamp, file name, content type, or any other relevant information. The Lambda function then attaches this metadata to the S3 object as object metadata during the upload process. It uses the AWS SDK (such as boto3) to upload the file to the S3 bucket.

#### Describing how handle large files efficiently:
##### **Multi-part upload**. 
It is a feature provided by AWS S3 that allows upload large objects in parts. By breaking large files into smaller parts and uploading them concurrently, we can improve upload speed and reliability. 

If one part fails to upload, we can retry that specific part without restarting the entire upload process. Upon successful upload of all parts, S3 combines them into a single object, maintaining data integrity.

##### Use compression techniques

Before uploading large files, consider applying compression techniques to reduce the file size. 

Compression can significantly reduce the amount of data transferred over the network, resulting in faster upload times and reduced storage costs. Common compression algorithms include gzip, bzip2, and LZMA, among others. 

The choice of algorithm depends on factors such as the type of data being compressed and the desired compression ratio.

#### Describing error handling:
   - Implement retry mechanisms for failed upload attempts to ensure reliability.
   - Provide informative error messages to users in case of upload failures.
   - Log errors on the backend for troubleshooting and monitoring purposes using AWS CloudWatch Logs.

#### Making secure the upload process:
   - Implement access controls and permissions to restrict unauthorized access to uploaded files in S3.
   - Encrypt files before uploading. AWS S3 offers server-side encryption options, where S3 automatically encrypts the data. This provides encryption at the storage level without the need to encrypt files before upload.
   - Use SFTP (SSH File Transfer Protocol). SFTP is a secure file transfer protocol that runs over SSH. It provides encryption and authentication, making it suitable for transferring large files securely over the internet.