import { Octokit } from "@octokit/core";

export default async function genImageData() {
    const currentPage = window.location.href.split('/');
    const collection = currentPage[6] != "pages"
        ? currentPage[6]?.concat('/')
        : null;
    const ref = currentPage.includes('entries') && collection != null
        ? 'cms/' + collection + currentPage[8]
        : null;

    let newImagePath = '';
    const octokit = new Octokit();
    if (ref !== null) {
        const commitSha = await octokit.request('GET /repos/usdoj-crt/beta-ada/commits/heads/' + ref, {
            owner: 'usdoj-crt',
            repo: 'beta-ada',
            ref: ref,
            headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'Accept': 'application/vnd.github.sha'
            }
        });

        newImagePath = 'https://raw.githubusercontent.com/usdoj-crt/beta-ada/' + commitSha.data + '/_assets/images/';
    }
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
