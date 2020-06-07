function getCep() {

    const cep = document.querySelector('#cep')

    const showData = (result) => {
        for (const campo in result) {
            if (document.querySelector('#' + campo)) {
                document.querySelector('#' + campo).value = result[campo]
            }
        }
    }

    cep.addEventListener('blur', (e) => {
        let search = cep.value.replace('-', '')
        const options = {
            method: 'GET',
            mode: 'cors',
            cache: 'default'
        }

        fetch(`https://viacep.com.br/ws/${search}/json/`, options)
            .then((response) => {
                response.json()
                    .then(data => showData(data))
            })
            .catch(e => alert('Cep inválido'))

    })
}
getCep();

// Itens de coleta
const itemsToColect = document.querySelectorAll('.items-grid li')
const collectedItems = document.querySelector('input[name=items')
let selectedItems = [];

function handleSelectedItem(event) {
    const itemLi = event.target

    // adicionar ou remover uma classe com javascript
    itemLi.classList.toggle('selected')
    const itemId = itemLi.dataset.id

    //verificar se existem itens selecionados, se sim
    // pegar os itens selecionados

    const alreadySelected = selectedItems.findIndex(item => {
        const itemFound = item == itemId // isso será true or false
        return itemFound
    })
    // se já estiver selecionado, tirar da seleção
    if (alreadySelected >= 0) {
        // tirar da posição
        const filteredItems = selectedItems.filter(item => {
            const itemIsDifferent = item != itemId // false
            return itemIsDifferent
        })
        selectedItems = filteredItems
    } else {
        // se não estiver selecionado, adicionar seleção
        selectedItems.push(itemId)
    }

    // atualizar o cmapo escondido com os tiens selecionados
    collectedItems.value = selectedItems
}
for (const item of itemsToColect) {
    item.addEventListener('click', handleSelectedItem)
}