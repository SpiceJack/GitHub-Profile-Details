
const username = process.argv[2]

if(!username) {
    console.log("error: please provide a GitHub username")
    process.exitCode = 1
}

async function github() {
    const response = await fetch(`https://api.github.com/users/${encodeURIComponent(username)}`)
    if(!response.ok) {
        console.error("Error fetching data from GitHub.")
        process.exitCode = 1
    }
    const data = await response.json()
    console.log(`Name: ${data.name}`)
    console.log(`Username: ${username}`)
    console.log(`Username: ${data.html_url}`)
    console.log(`Public repos: ${data.public_repos}`)
    console.log(`Followers: ${data.followers}`)
}

async function handleRequest() {

try {
    await github()
}
catch {
    console.error("error: error processing request..")
    process.exitCode = 1
}
}

handleRequest()

