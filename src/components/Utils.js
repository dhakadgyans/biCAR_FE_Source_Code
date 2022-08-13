import React, {useEffect } from "react";

export function CallPostUrl(url,bodyObject,cbFnc,cbErr)
{
    fetch(url, {
    method: 'POST',
    body: JSON.stringify(bodyObject),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    }
  })
    .then((response) => 
    {
      //alert(response);
      if (response.ok) 
      {
        return response.json();
      }
      else
      {

          console.log(response);
          const responseError = {
            type: 'Error',
            message: response.statusText || 'Something went wrong',
            data: response.data || '',
            code: response.status || '',
          };
          let error = new Error();
          error.info = responseError;
          throw (error);
      }
    }).then(cbFnc)
    .catch((error) => 
    {
      if(cbErr !== null && cbErr !== undefined)
      {
        cbErr(error);
      }
    })
};