//./services/BookService.js

export const _updateArticle = (i, name) => {
  return fetch(`/article/${i}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ name })
  }).then(res => res.json());
};

export const _loadArticle = id => {
  return fetch(`/article/${id}`).then(res => res.json());
};

export const _loadArticles = () => {
  return fetch("/articles").then(res => res.json());
};

export const _deleteArticle = id => {
  return fetch(`/delete/${id}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(res => res.json());
};

// export const _createBook = n => {
//   return fetch("/booksinsert", {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json"
//     },
//     body: JSON.stringify({ name: n })
//   }).then(res => res.json());
// };

//put all of the fetch calls in BookService.js
