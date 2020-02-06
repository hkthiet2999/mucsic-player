var RANDOM_CSS = {
    cssfiles: ['bg1.css', 'bg2.css', 'bg3.css', 'bg4.css'],
    pathtocss: 'css/',
    getrandomcss: function() { return this.cssfiles[Math.floor(Math.random() * this.cssfiles.length)]; },
    getlinktag: function() { return '<link rel="stylesheet" type="text/css" href="' + this.pathtocss + this.getrandomcss() + '" />'; },
    printlinktag: function() { document.write(this.getlinktag()); }
};