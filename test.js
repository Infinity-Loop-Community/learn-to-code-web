
function main() {
  fetch(`https://dev.api.learn-to-code.io/participants/87d91fb0-d87c-4ffd-bb80-42ab2e948c9d/events/12345`, {
    method: 'PUT',
    body: '{}',
    headers: {
      'Content-Type': 'application/json',
      "Cookie": "next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=b801cc17759a69ba0ae23d2b4844bbbe7ac44ccf2bbe3a50b297c0fb6fd44207%7C6326f297c78970f1681464550f3ee0336cd9e4ceaabdddc277ec6f0869507725; next-auth.session-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2ViYXN0aWFuIFNpZ2wiLCJlbWFpbCI6ImFrcmlsbG84OUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNGRCbjEza3VMUWx3dnBKeFZ4R2JZdVpFMEVMc0hBS3RudmVlRE89czk2LWMiLCJzdWIiOiJjbGR2eXR3NmMwMDAwbDUwODZvZ3ZvdnI4IiwiaWF0IjoxNjc5MjUwOTQ5LCJleHAiOjE3ODE4NDI5NDl9.eruaZVelm8jW12PAFMREOw3vyFZQ098ZrfmtFGSuyhs"
    },
  }).then(res => {
    return res.json()
  }).then((json) => {
    console.log('success',  json)
  })
}

// main()

function get() {
  fetch('https://dev.api.learn-to-code.io/courses/fcf7890f-9c72-46d3-931e-34494307be37', {
    method: "GET",
    headers: {
      "Cookie": "next-auth.callback-url=http%3A%2F%2Flocalhost%3A3000; next-auth.csrf-token=b801cc17759a69ba0ae23d2b4844bbbe7ac44ccf2bbe3a50b297c0fb6fd44207%7C6326f297c78970f1681464550f3ee0336cd9e4ceaabdddc277ec6f0869507725; next-auth.session-token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiU2ViYXN0aWFuIFNpZ2wiLCJlbWFpbCI6ImFrcmlsbG84OUBnbWFpbC5jb20iLCJwaWN0dXJlIjoiaHR0cHM6Ly9saDMuZ29vZ2xldXNlcmNvbnRlbnQuY29tL2EvQUVkRlRwNGRCbjEza3VMUWx3dnBKeFZ4R2JZdVpFMEVMc0hBS3RudmVlRE89czk2LWMiLCJzdWIiOiJjbGR2eXR3NmMwMDAwbDUwODZvZ3ZvdnI4IiwiaWF0IjoxNjc5MjUwOTQ5LCJleHAiOjE3ODE4NDI5NDl9.eruaZVelm8jW12PAFMREOw3vyFZQ098ZrfmtFGSuyhs"
    }
  }).then(res => {

    return res.json()
  })
  .then(json => {
    console.log(json)
  })



}

// get()
main()
