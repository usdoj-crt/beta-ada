import { Octokit } from "@octokit/core";

export default async function genImageData() {
    const currentPage = window.location.href.split('/');
    const collection = currentPage[6] != "pages"
        ? currentPage[6].concat('/')
        : null;
    const ref = currentPage.includes('entries') && collection != null
        ? 'cms/'.concat(collection).concat(currentPage[8])
        : null;

    let newImagePath = '';
    const octokit = new Octokit();
    if (ref !== null) {
        const commitSha = await octokit.request('GET /repos/usdoj-crt/beta-ada/commits/heads/'.concat(ref), {
            owner: 'usdoj-crt',
            repo: 'beta-ada',
            ref: ref,
            headers: {
            'X-GitHub-Api-Version': '2022-11-28',
            'Accept': 'application/vnd.github.sha'
            }
        });

        newImagePath = 'https://raw.githubusercontent.com/usdoj-crt/beta-ada/'.concat(commitSha.data).concat('/_assets/images/');
    }
    const folders = ['/', '/design-standards/', '/landing/', '/project-images/']
    const imageList = [];

    for (const folder of folders) {
        const response = await octokit.request('GET /repos/usdoj-crt/beta-ada/contents/_assets/images'.concat(folder), {
            owner: 'usdoj-crt',
            repo: 'beta-ada',
            path: '_assets/images/'.concat(folder),
            headers: {
            'X-GitHub-Api-Version': '2022-11-28'
            }
        });
        imageList.push(...response.data);
    }

    return {
        'imageList': imageList,
        'newImagePath': newImagePath,
    };
}