setTimeout(
    () => {
        // callback
        addDiv('unu')
        setTimeout(
            () => {
                // callabck
                addDiv('doi')
                setTimeout(
                    () => {
                        addDiv('trei')
                    },
                    1000
                )
            },
            2000
        )
    },
    3000
)

function addDiv(text) {
    let div = document.createElement('div')
    div.innerText = text
    document.querySelector('body').appendChild(div)
}