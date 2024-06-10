const solicitandoDados = async  () => {
    try {
        resposta = await axios.get('https://randomuser.me/api/')
        return resposta
    } catch {
        alert('Ops! Não recebemos nenhuma resposta.')
    }
}


for (let d = 0; d < 3; d++) {
    const repetindo = async () => {
        await solicitandoDados()
        const tela = document.querySelector('.tela')

        // 1 - Conteiner
        const conteiner = document.createElement('div')
        conteiner.classList.add('conteiner')
        tela.appendChild(conteiner)

        const resultados = resposta.data.results[0]
        
        // 2 - Conteiner Top
        const conteinerTop = document.createElement('div')
        conteinerTop.classList.add('conteiner-top')
        conteiner.appendChild(conteinerTop)

        // 3 - Profile photo and Username
        const photoAndUsername = document.createElement('div')
        photoAndUsername.classList.add('photo-username')
        conteinerTop.appendChild(photoAndUsername)

        // 4 - Profile photo
        const photoResult = document.createElement('img')
        photoResult.classList.add('photo-profile')
        photoResult.src = resultados.picture.large
        photoAndUsername.appendChild(photoResult)

        // 5 - Username
        const nomeResult = document.createElement('h1')
        nomeResult.textContent = `${resultados.login.username}`
        photoAndUsername.appendChild(nomeResult)

        // 6 - {time} minutes ago
        const minutesAgo = document.createElement('h1')
        const numeroAleatorio = Math.floor(Math.random() * 60) + 1;
        minutesAgo.textContent = `${numeroAleatorio}m`
        minutesAgo.style.color = 'gray'
        const caractere = document.createElement('h1')
        caractere.style.color = 'gray'
        caractere.textContent = '•'
        photoAndUsername.appendChild(caractere)
        photoAndUsername.appendChild(minutesAgo)

        // 7 - Follow
        const follow = document.createElement('h1')
        follow.textContent = 'Seguir'
        follow.style.color = '#0095F6'
        const caractere2 = document.createElement('h1')
        caractere2.style.color = 'gray'
        caractere2.textContent = '•'
        photoAndUsername.appendChild(caractere2)
        photoAndUsername.appendChild(follow)

        // 8 - More icon
        const moreIcon = document.createElement('i')
        moreIcon.classList.add('bi', 'bi-three-dots')
        conteinerTop.appendChild(moreIcon)

        // 9 - Content Post
        const conteinerContent = document.createElement('div')
        conteinerContent.classList.add('conteiner-content')
        conteiner.appendChild(conteinerContent)

        //  10 - Photo Posted
        const photoPost = document.createElement('img')
        photoPost.src = resultados.picture.large
        photoPost.classList.add('photo-post')
        conteinerContent.appendChild(photoPost)

        // 11 - Conteiner Bottom
        const conteinerBottom = document.createElement('div')
        conteinerBottom.classList.add('conteiner-bottom')
        conteiner.appendChild(conteinerBottom)

        // 12 - Left Side
        const leftSideIcons = document.createElement('div')
        leftSideIcons.classList.add('left-side-icons')
        conteinerBottom.appendChild(leftSideIcons)

        // 13 - Heart Icon
        const heart = document.createElement('i')
        heart.classList.add('bi','bi-heart')
        leftSideIcons.appendChild(heart)

        let liked = false
        heart.addEventListener('click', () => {
            console.log('Botão clicado')

            if (liked === true) {
                liked = false
                heart.classList.remove('bi-heart-fill')
                heart.classList.add('bi-heart')
            } else {
                liked = true
                heart.classList.remove('bi-heart')
                heart.classList.add('bi-heart-fill')
            }
        })

        // 14 - Comments Icon
        const comments = document.createElement('i')
        comments.classList.add('bi', 'bi-chat')
        leftSideIcons.appendChild(comments)

        console.log(resultados)

        // 15 - Send Icon
        const send = document.createElement('i')
        send.classList.add('bi', 'bi-send')
        conteinerBottom.appendChild(send)

        // 16 - Description
        const description = document.createElement('div')
        description.classList.add('description')
        conteiner.appendChild(description)

        // 17 - Description Username
        const descriptionUser = document.createElement('h1')
        descriptionUser.textContent = `${resultados.login.username}`
        description.appendChild(descriptionUser)

        // 18 - Description Text
        const descriptionText = document.createElement('h1')
        descriptionText.textContent = `Lorem ipsum dolor sit amet.`
        descriptionText.style.fontWeight = '400'
        descriptionText.style.color = 'gray'
        description.appendChild(descriptionText)
    }
    repetindo()
}

document.addEventListener("DOMContentLoaded", () => {
    telaAviso = document.createElement('div')
    telaAviso.classList.add('tela-aviso')
    document.body.appendChild(telaAviso)

    aviso = document.createElement('div')
    aviso.classList.add('aviso')
    document.body.appendChild(aviso)

    closeIcon = document.createElement('i')
    closeIcon.id = 'closeAll'
    closeIcon.classList.add('bi', 'bi-x-lg')
    closeIcon.style.color = '#cc1414'
    closeIcon.style.position = 'absolute'
    closeIcon.style.right = '10px'
    closeIcon.style.top = '10px'
    aviso.appendChild(closeIcon)

    avisosText = document.createElement('h2')
    avisosText.textContent = 'Observação:'
    aviso.appendChild(avisosText)

    avisoParagrafo = document.createElement('p')
    avisoParagrafo.textContent = 'Este projeto visa a utilização de API e a prática de manipulação do DOM, no Javascript'
    aviso.appendChild(avisoParagrafo)

    closeIcon.addEventListener('click', function () {
        telaAviso.remove()
        aviso.remove()
        closeIcon.remove()
        avisosText.remove()
        avisoParagrafo.remove()
})
})