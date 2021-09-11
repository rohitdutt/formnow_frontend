import React, { useEffect, useState } from 'react';

const ResponseTable = ({responses , formDetails}) => {

  var jsonObject = {};
  const [arrangedData , setArrangedData] = useState([]);
  useEffect(()=>{
    responses.map(response=>{
       formDetails.formFields.map( field =>{
         jsonObject[field.fieldName] = response.response[field.id];
        })
        const newData = [...arrangedData , jsonObject];
        // console.log(newData)
        // console.log(jsonObject)
        setArrangedData(newData);
        // console.log(jsonObject)
        // console.log(arrangedData)
    })
  },[]);

  return (
    <div className="flex flex-col">
      <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                {
                  formDetails && formDetails.formFields.map(field =>(
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {field.fieldName}
                  </th>
                  ))
                }
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {/*arrangedData && arrangedData.map((field) => (
                    console.log(field)
                  // <tr key={field}>
                  //   <td className="px-6 py-4 whitespace-nowrap">
                  //     {field}
                  //   </td>
                  // </tr>
                ))
                */}
                {
                    responses.map(response =>{
                        console.log(response.response)

                        // response.response.map(res =>{
                        //     console.log(res)
                        // })
                    })
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResponseTable;
