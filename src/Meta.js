const token = "eyJhbGciOiJSUzUxMiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIzNDdmODg1M2NiZDU3NjllZjQzYjRjM2U3YmUwYTBkZCIsInBlcm1pc3Npb25zIjpbXSwiYWNjZXNzUnVsZXMiOlt7ImlkIjoidHJhZGluZy1hY2NvdW50LW1hbmFnZW1lbnQtYXBpIiwibWV0aG9kcyI6WyJ0cmFkaW5nLWFjY291bnQtbWFuYWdlbWVudC1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1yZXN0LWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1ycGMtYXBpIiwibWV0aG9kcyI6WyJtZXRhYXBpLWFwaTp3czpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciIsIndyaXRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoibWV0YWFwaS1yZWFsLXRpbWUtc3RyZWFtaW5nLWFwaSIsIm1ldGhvZHMiOlsibWV0YWFwaS1hcGk6d3M6cHVibGljOio6KiJdLCJyb2xlcyI6WyJyZWFkZXIiLCJ3cml0ZXIiXSwicmVzb3VyY2VzIjpbIio6JFVTRVJfSUQkOioiXX0seyJpZCI6Im1ldGFzdGF0cy1hcGkiLCJtZXRob2RzIjpbIm1ldGFzdGF0cy1hcGk6cmVzdDpwdWJsaWM6KjoqIl0sInJvbGVzIjpbInJlYWRlciJdLCJyZXNvdXJjZXMiOlsiKjokVVNFUl9JRCQ6KiJdfSx7ImlkIjoicmlzay1tYW5hZ2VtZW50LWFwaSIsIm1ldGhvZHMiOlsicmlzay1tYW5hZ2VtZW50LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRVU0VSX0lEJDoqIl19LHsiaWQiOiJjb3B5ZmFjdG9yeS1hcGkiLCJtZXRob2RzIjpbImNvcHlmYWN0b3J5LWFwaTpyZXN0OnB1YmxpYzoqOioiXSwicm9sZXMiOlsicmVhZGVyIiwid3JpdGVyIl0sInJlc291cmNlcyI6WyIqOiRV"
const api = new MetaApi(token)


export async function Fetchdata(){

try {
    const account = await api.metatraderAccountApi.createAccount({
      name: 'Trading account #1',
      type: 'cloud',
      login: '1234567',
      platform: 'mt4',
      // password can be investor password for read-only access
      password: 'qwerty',
      server: 'ICMarketsSC-Demo',
      magic: 123456,
      keywords: ["Raw Trading Ltd"],
      quoteStreamingIntervalInSeconds: 2.5, // set to 0 to receive quote per tick
      reliability: 'high' // set this field to 'high' value if you want to increase uptime of your account (recommended for production environments)
    });
  } catch (err) {
    // process errors
    if(err.details) {
      // returned if the server file for the specified server name has not been found
      // recommended to check the server name or create the account using a provisioning profile
      if(err.details === 'E_SRV_NOT_FOUND') {
        console.error(err);
      // returned if the server has failed to connect to the broker using your credentials
      // recommended to check your login and password
      } else if (err.details === 'E_AUTH') {
        console.log(err);
      // returned if the server has failed to detect the broker settings
      // recommended to try again later or create the account using a provisioning profile
      } else if (err.details === 'E_SERVER_TIMEZONE') {
        console.log(err);
      }
    }
  }
}
