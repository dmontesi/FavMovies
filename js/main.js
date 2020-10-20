const postTemplate = document.querySelector('#post-template');
const postTemplate2 = document.querySelector('#post-template-2');

const films = document.querySelector('#films-post');
const shows = document.querySelector('#tv-post');

const searchUrl =
	'https://www.imdb.com/list/ls083906744/?pf_rd_m=A2FGELUUNOQJNL&pf_rd_p=4dc7ad1a-76a6-49eb-9acb-5d6959572df8&pf_rd_r=Y5N3BKEJHZ18798FC8G2&pf_rd_s=right-4&pf_rd_t=48201&pf_rd_i=watchlist&ref_=wt_otl_1';
const movieUrl = 'https://www.imdb.com/title/';

getMovies().catch((err) => console.error(err));
getShows().catch((err) => console.error(err));

async function getMovies(searchTerm) {
	const response = await fetch('favs/movies.json');
	const posts = await response.json();
	let i = 0;

	posts.forEach((post) => {
		i++;
		if (i > 0) {
			fetch('https://unsplash.it/400/300')
				.then((res) => res.blob())
				.then((blob) => {
					const movie = post.Title;
					const director = post.Directors;
					const country = post.Genres;
					const link = post.URL;
					const year = post.Year;
					const trailer = post.trailer;

					const newPost = document.importNode(postTemplate.content, true);
					const postTitle = newPost.querySelector('.card__title');
					const postBody = newPost.querySelector('.card__director');
					const postYear = newPost.querySelector('.card__year');
					const postURL = newPost.querySelector('.card__link');
					const postCountry = newPost.querySelector('.card__country');
					const postImg = newPost.querySelector('.card__img');
					const postTrailer = newPost.querySelector('.card__trailer');

					postImg.src = URL.createObjectURL(blob);
					postTitle.innerText = movie;
					postBody.innerText = director;
					postURL.href = link;
					postYear.innerText = year;
					postCountry.innerText = country;
					films.appendChild(newPost);
					postTrailer.href = trailer;
				})
				.catch((err) => console.error(err));
		}
	});
}

async function getShows() {
	const response = await fetch('favs/shows.json');
	const posts = await response.json();
	let i = 0;

	posts.forEach((post) => {
		i++;
		if (i > 0) {
			fetch('https://unsplash.it/300/200')
				.then((res) => res.blob())
				.then((blob) => {
					const movie = post.Title;
					const director = post.Directors;
					const country = post.Genres;
					const link = post.URL;
					const year = post.Year;
					const trailer = post.trailer;

					const newPost = document.importNode(postTemplate2.content, true);
					const postTitle = newPost.querySelector('.card__title');
					const postBody = newPost.querySelector('.card__director');
					const postYear = newPost.querySelector('.card__year');
					const postURL = newPost.querySelector('.card__link');
					const postCountry = newPost.querySelector('.card__country');
					const postImg = newPost.querySelector('.card__img');
					const postTrailer = newPost.querySelector('.card__trailer');

					postImg.src = URL.createObjectURL(blob);
					postTitle.innerText = movie;
					postBody.innerText = director;
					postURL.href = link;
					postYear.innerText = year;
					postCountry.innerText = country;
					shows.appendChild(newPost);
					postTrailer.href = trailer;
				})
				.catch((err) => console.error(err));
		}
	});
}
