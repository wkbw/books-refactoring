class Book extends HTMLElement{
    constructor(){
        super();
    }
    
    connectedCallback() {
        const title = this.getAttribute('title');
        const subtitle = this.getAttribute('subtitle');
        const author = this.getAttribute('author');
        const published = this.getAttribute('published');
        const pages = this.getAttribute('pages');
        const publisher = this.getAttribute('publisher');
        const isbn = this.getAttribute('isbn');
        const description = this.getAttribute('description');
        const image = this.getAttribute('image');
        const link = this.getAttribute('link');

        this.innerHTML = `
        <div class="card">
        <h5 class="card-header">${title}</h5>
        <div class="card-body">
            <table>
                <tr>
                    <td width="60px"><img src="${image}" class="book-img"></img></td>
                    <td> <h5>${subtitle}</h5></td>
                </tr>
            </table>
            <p class="card-text">
                <table class="table">
                    <tr>
                        <td class="book-title">Title</td>
                        <td>${title}</td>
                    </tr>
                    <tr>
                        <td class="book-title">Subtitle</td>
                        <td>${subtitle}</td>
                    </tr>
                    <tr>
                        <td class="book-title">Author</td>
                        <td>${author}</td>
                    </tr>
                    <tr>
                        <td class="book-title">Published</td>
                        <td>${published}</td>
                    </tr>
                    <tr>
                        <td class="book-title">Pages</td>
                        <td>${pages}</td>
                    </tr>
                    <tr>
                        <td class="book-title">Publisher</td>
                        <td>${publisher}</td>
                    </tr>
                    <tr>
                        <td class="book-title">ISBN</td>
                        <td>${isbn}</td>
                    </tr>
                    <tr>
                        <td class="book-title">Description</td>
                        <td>${description}</td>
                    </tr>
                </table>
                <p><a href="${link}" class="btn btn-primary">View <em>${title}</em> on Amazon</a></p>
            </p>
        </div>
    </div>
    `;

    }
}
customElements.define('wbw-book', Book);