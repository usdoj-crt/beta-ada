import { Octokit } from "@octokit/core";

const octokit = new Octokit();
const rawAssetURL = 'https://raw.githubusercontent.com/usdoj-crt/beta-ada/';
const assetFileTypes = ['pdf', 'jpg', 'jpeg', 'png'];
export default async function genImageData() {
    const currentPage = window.location.href.split('/');
    const collection = currentPage[6] != "pages"
        ? currentPage[6]?.concat('/')
        : null;
    const ref = currentPage.includes('entries') && collection != null
        ? 'cms/' + collection + currentPage[8]
        : null;

    const newImagePath = await getNewImagePath(ref);

    const assetContentResponse = await octokit.request('GET /repos/usdoj-crt/beta-ada/contents/_assets/', {
        owner: 'usdoj-crt',
        repo: 'beta-ada',
        path: '_assets/',
        headers: {
        'X-GitHub-Api-Version': '2022-11-28'
        }
    });
    const imageFolderSha = assetContentResponse.data.filter(folder => folder['name'] === 'images').map(folder => folder['sha'])[0];
    const treeResponse = await octokit.request('GET /repos/usdoj-crt/beta-ada/git/trees/' + imageFolderSha + '?recursive=1', {
        owner: 'usdoj-crt',
        repo: 'beta-ada',
        tree_sha: imageFolderSha,
        headers: {
            'X-GitHub-Api-Version': '2022-11-28'
        }
    });

    const imageList = treeResponse.data.tree.filter(result => result['type'] === 'blob');

    return {imageList, newImagePath};
}

async function getNewImagePath(ref) {
    if (!ref) return '';

    const commitSha = await octokit.request('GET /repos/usdoj-crt/beta-ada/commits/heads/' + ref, {
        owner: 'usdoj-crt',
        repo: 'beta-ada',
        ref: ref,
        headers: {
        'X-GitHub-Api-Version': '2022-11-28',
        'Accept': 'application/vnd.github.sha'
        }
    });

    const PR = await octokit.request('GET /repos/usdoj-crt/beta-ada/commits/' + commitSha.data + '/pulls', {
        owner: 'usdoj-crt',
        repo: 'beta-ada',
        commit_sha: commitSha.data,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });

    const prNumber = PR.data[0].number;

    if (!prNumber) return rawAssetURL + commitSha.data + '/_assets/images/';

    const prFiles = await octokit.request('GET /repos/usdoj-crt/beta-ada/pulls/' + prNumber + '/files', {
        owner: 'usdoj-crt',
        repo: 'beta-ada',
        pull_number: prNumber,
        headers: {
          'X-GitHub-Api-Version': '2022-11-28'
        }
      });
    const fileNames = prFiles.data.filter(prFile => assetFileTypes.indexOf(prFile.filename.split('.')[1]) !== -1).map(prFile => {
        const prFileArr = prFile.filename.split('/');
        prFileArr.pop();
        return '/' + prFileArr.join('/') + '/';
    });
    if (!fileNames.length) return rawAssetURL + commitSha.data + '/_assets/images/';
    return rawAssetURL + commitSha.data + fileNames[0]
}
