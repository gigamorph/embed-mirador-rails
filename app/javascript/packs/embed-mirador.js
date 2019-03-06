import 'jquery/src/jquery'
import 'jquery-ujs/src/rails'

jQuery(document).ready(function () {
  const mirador = Mirador.viewer({
    id: 'mirador',
    windows: [{
      loadedManifest: 'https://iiif.harvardartmuseums.org/manifests/object/299843',
      canvasIndex: 2,
    },
    {
      loadedManifest: 'https://iiif.bodleian.ox.ac.uk/iiif/manifest/e32a277e-91e2-4a6d-8ba6-cc4bad230410.json',
      thumbnailNavigationPosition: 'off',
    }],
    manifests: {
      "https://media.nga.gov/public/manifests/nga_highlights.json": { provider: "National Gallery of Art"},
      "https://data.ucd.ie/api/img/manifests/ucdlib:33064": { provider: "Irish Architectural Archive"},
      "https://wellcomelibrary.org/iiif/b18035723/manifest": { provider: "Wellcome Library"},
      "https://demos.biblissima.fr/iiif/metadata/florus-dispersus/manifest.json": { provider: "Biblissima"},
      "https://www.e-codices.unifr.ch/metadata/iiif/gau-Fragment/manifest.json": { provider: "e-codices - Virtual Manuscript Library of Switzerland"},
      "https://wellcomelibrary.org/iiif/collection/b18031511": { provider: "Wellcome Library"},
      "https://gallica.bnf.fr/iiif/ark:/12148/btv1b10022508f/manifest.json": { provider: "Bibliothèque nationale de France"},
      "https://manifests.britishart.yale.edu/Osbornfa1": { provider: "Beinecke Rare Book and Manuscript Library, Yale University"},
      "https://iiif.biblissima.fr/chateauroux/B360446201_MS0005/manifest.json": { provider: "Biblissima"},
      "https://iiif.durham.ac.uk/manifests/trifle/32150/t1/m4/q7/t1m4q77fr328/manifest": { provider: "Durham University Library"},
      "https://iiif.vam.ac.uk/collections/O1023003/manifest.json": { provider: "Ocean liners"},
    }
  });
});
