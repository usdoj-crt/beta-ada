import { Octokit } from "@octokit/core";

export default async function genImagePaths() {

const octokit = new Octokit({
    auth: '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'
  })

const imageResponse = await octokit.request('GET /repos/usdoj-crt/beta-ada/contents/_assets/images/', {
    owner: 'usdoj-crt',
    repo: 'beta-ada',
    path: '_assets/images/',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });
const dsImageResponse = await octokit.request('GET /repos/usdoj-crt/beta-ada/contents/_assets/images/design-standards/', {
    owner: 'usdoj-crt',
    repo: 'beta-ada',
    path: '_assets/images/design-standards/',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

const lImageResponse = await octokit.request('GET /repos/usdoj-crt/beta-ada/contents/_assets/images/landing/', {
    owner: 'usdoj-crt',
    repo: 'beta-ada',
    path: '_assets/images/landing/',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

const piImageResponse = await octokit.request('GET /repos/usdoj-crt/beta-ada/contents/_assets/images/project-images/', {
    owner: 'usdoj-crt',
    repo: 'beta-ada',
    path: '_assets/images/project-images/',
    headers: {
      'X-GitHub-Api-Version': '2022-11-28'
    }
  });

  const imageData = imageResponse.data.concat(dsImageResponse.data).concat(lImageResponse.data).concat(piImageResponse.data);

   return imageData;
}