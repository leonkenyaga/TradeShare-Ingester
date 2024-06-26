import React, { useState, useEffect } from 'react';
// import library in your component file
import MetaApi, { MetatraderAccountInformation, RpcMetaApiConnectionInstance } from 'metaapi.cloud-sdk';

const accountId = '621f7bb5-1a52-4543-b5da-bfb39bba64a3';
const token = 'eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzNDdmODg1M2NiZDU3NjllZjQzYjRjM2U3YmUwYTBkZCIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7ImlkIjoidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJ0cmFkaW5nLWFjY291bnQtbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1ycGMtYXBpIiwibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTp3czpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1yZWFsLXRpbWUtc3RyZWFtaW5nLWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6d3M6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoicmlzay1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsicmlzay1tYW5hZ2VtZW50LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsiaWQiOiJjb3B5ZmFjdG9yeS1hcGkiLCJtZXRob2RzIjpbImNvcHlmYWN0b3J5LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsiaWQiOiJtdC1tYW5hZ2VyLWFwaSIsIm1ldGhvZHMiOlsibXQtbWFuYWdlci1hcGk6cmVzdDpkZWFsaW5nOio6KiIsIm10LW1hbmFnZXItYXBpOnJlc3Q6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJpZCI6ImJpbGxpbmctYXBpIiwibWV0aG9kcyI6WyJiaWxsaW5nLWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19XSwidG9rZW5JZCI6IjIwMjEwMjEzIiwiaW1wZXJzb25hdGVkIjpmYWxzZSwicmVhbFVzZXJJZCI6IjM0N2Y4ODUzY2JkNTc2OWVmNDNiNGMzZTdiZTBhMGRkIiwiaWF0IjoxNzE5MjA3NTU2LCJleHAiOjE3MjY5ODM1NTZ9.gSrw5AaSUHuuMkOPyCfhBSwIzPN-NuUCFIMZEoSe52JMAX8PPDAc6X47-7ni3eY_xo-UHR5TP6z9R_eOxc1KbGxQuY85rFXPEtsXqTqaIKlDym9OyB6oMStsVm_N0dt58FugYJKGil_Aru5qYTGm9QC4B17wNgIisYfAV8Gz_FRAJSaoMhwNWOyi3-iAJBy_hT_fy7zHyfoFZyBe7JMrZbDmC6na2FFTvRDXvKklL62EgGwmCld4_JPhJxUx9v04Q0K9F6uwRnreOuPGL6LQajVnis0XzgSEpFOTj8ftWh_6Gp6J2c09swIzqNdZaAvAwOjepYPs-88IzpcheI3JYxnY358LB8gthVjBP1m5A1UM8X3GEyhyA9p8FlPpIARFHrAm9EGPbw_lbF1Z2oIwUk3n8TMlQroV8FUB9BlFAGrPKwgflNjZbttSZW4SFo0LDX6doAdJWAmrFcp9IHes7Pooi7P_aO1WKOwldbfz2dPuOaASVD6aFaj8-si3cGvgsBmCzoD6OY1Cou-k7k88hXeQHhjgA1vLTIkgrGkmLoNWrue-bvfLqMQqE3A3qKyIFHTTx_WSYUzFAVsLjPiv6PoK5Va8Jvkux9fDoRT48GgFE0A4L6_B2nu9-WZcqqiXw-xcIqglA2B7MVD3DvqZ6JBUb7ad9RGQLotoa9Jc9bk';

const MyComponent = () => {


  return (
    <div>
      <p> History </p> 
    </div>
  );
};

export default MyComponent;