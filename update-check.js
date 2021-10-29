var AutoUpdater = require('auto-updater');
 
    var autoupdater = new AutoUpdater({
     autoupdate: false,
     checkgit: true,
     contenthost: 'https://github.com/MeddahAbdellah/test-auto-update.git',
    });
 
    autoupdater.on('check.out-dated', function(v_old, v) {
      console.warn("Your version is outdated. " + v_old + " of " + v);
      autoupdater.fire('download-update'); // If autoupdate: false, you'll have to do this manually.
      // Maybe ask if the'd like to download the update.
    });
    autoupdater.on('update.downloaded', function() {
      console.log("Update downloaded and ready for install");
      autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually.
    });
    autoupdater.on('update.not-installed', function() {
      console.log("The Update was already in your folder! It's read for install");
      autoupdater.fire('extract'); // If autoupdate: false, you'll have to do this manually.
    });
    autoupdater.on('update.extracted', function() {
      console.log("Update extracted successfully!");
      console.warn("RESTART THE APP!");
    });
 
    // Start checking
    

    setInterval(() => {
        autoupdater.fire('check');
        console.log('checking Updates');
    }, 5000);