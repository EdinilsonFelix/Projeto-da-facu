const LoadProducts = (produtos, IdDivParent) => {

    const parentDiv = document.querySelector(IdDivParent)
    produtos.forEach(produto => {

        const hmtl =

            `
      <article class= pratos>
      <img src="${produto.image}" alt"${produto.tittle}">
      <h4>${produto.tittle}</h4>
      <h4>R$${produto.value}</h4>
      <p>${produto.description}</p>
      <button type="button" onclick="modalTrigger"(${produto.id})>Quero este prato </button>
      </article>
      `


        parentDiv.insertAdjacentHTML('beforeend', hmtl)
    })

}

const modalTrigger = (productID) => {
    const modal = document.querySelector('.modal')

    if (productId != null) {
        const produto = produto.filter(produto => produto.id == productID)[0]

        if (produto != null) {
            modal.querySelector('#title').value = produto.tittle
        }
    }

    modal.classList.contains('hide') == true ? modal.classList.remove('hide') : modal.classList.add('hide')


}


loadProducts = (produtos, '#product-div')