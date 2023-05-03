import React, { useEffect, useState } from 'react';
import axios from 'axios';

//type Props = {};

function getRepoName() {
  const options = {
    method: 'GET',
    url: 'https://api.github.com/users/james4-daf/repos',
  };
  return axios
    .request(options)
    .then(function ({ data }: { data: any[] }) {
      //console.log(data);
      const names = data.map((obj: any) => obj.name);
      const nameToLook = ['BlogSite', 'carGame', 'YouGain', 'GetToTheSnippet'];
      const final = names.filter((name: string) => nameToLook.includes(name));
      console.log(final);
      return final;
    })
    .catch(function (error: any) {
      console.error(error);
    });
}

function GithubProjects() {
  const [apiResponse, setApiResponse] = useState<Array<string | undefined>>([]);

  useEffect(() => {
    getRepoName().then((result: string[] | void) =>
      setApiResponse(result || []),
    );
  }, []);

  return (
    <div>
      <h2>GithubProjects</h2>
      <ul>
        {apiResponse.map((item: string | undefined) => {
          return <li>{item}</li>;
        })}
      </ul>
    </div>
  );
}

export default GithubProjects;
