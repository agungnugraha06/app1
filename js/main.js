/*
Copyright 2018 Google Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/*jshint esversion: 6*/

const app = (() => {


  function getImageName(wisata) {
    // create and return a promise
   wisata = wisata.toLowerCase();
    var promiseOfImageName = new Promise(function(resolve, reject){
      setTimeout(function() {
        if ( wisata === 'malioboro' || wisata === 'tugu' || wisata === 'bukit bintang' || wisata === 'taman pintar') {
          resolve(wisata + '.jpg');
        } else {
          reject(Error('Didn\'t receive a valid wisata name!'));
        }
      }, 1000);
    });
    console.log(promiseOfImageName);
    return promiseOfImageName;
  }

  function isMalioboro(wisata) {

    // Optional - create and return a promise that resolves if input is "Malioboro"

  }

  function placeChain(wisata) {
    return getImageName(wisata)
    // mengambil gamabar nama dengan wisata
    .catch(fallbackName)
    //jika gagal mengambil gambar maka ke fungsi fallbackname
    .then(fetchPlace)
    // jika benar akan di fitch wisata
    .then(processPlace)
    // memproses wisata
    .then(appendPlace)
    .catch(logError);
  }

  function allPlaces(promiseList) {

    // use promise.all

  }


  // call the allFlags function


  // use Promise.race


  /* Helper functions */

  function logSuccess(result) {
    console.log('Success!:\n' + result);
  }

  function logError(err) {
    console.log('Oh no!:\n' + err);
  }

  function returnFalse() {
    return false;
  }

  function fetchPlace(imageName) {
    return fetch('place/' + imageName); // fetch returns a promise
  }

  function processPlace(PlaceResponse) {
    if (!PlaceResponse.ok) {
      throw Error('Bad response for Place request!'); // This will implicitly reject
    }
    return PlaceResponse.blob(); // blob() returns a promise
  }

  function appendPlace(PlaceBlob) {
    const PlaceImage = document.createElement('img');
    const PlaceDataURL = URL.createObjectURL(PlaceBlob);
    PlaceImage.src = PlaceDataURL;
    const imgContainer = document.getElementById('img-container');
    imgContainer.appendChild(PlaceImage);
    imgContainer.style.visibility = 'visible';
  }

  function fallbackName() {
    return 'tugu.jpg';
  }

  // Don't worry if you don't understand this, it's not part of Promises.
  // We are using the JavaScript Module Pattern to enable unit testing of
  // our functions.
  return {
    getImageName: (getImageName),
    placeChain: (placeChain),
    isMalioboro: (isMalioboro),
    fetchPlace: (fetchPlace),
    processPlace: (processPlace),
    appendPlace: (appendPlace),
    allPlaces: (allPlaces)
  };

})();
