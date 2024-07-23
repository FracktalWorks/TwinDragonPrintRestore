$(function() {
    function JuliaPrintRestoreViewModel(parameters) {
        var self = this;

        self.VM_settings = parameters[0];

        // self.saveConfig = function() {
        //     var data = {
        //         plugins: {
        //             TwinDragonPrintRestore: {

        //             }
        //         }
        //     };
        //     self.VM_settings.saveData(data);
        // };

        self.onDataUpdaterPluginMessage = function(plugin, data) {
            if (plugin !== "TwinDragonPrintRestore") {
                return;
            }
            console.log(data);
        };

        self.onStartup = function() {

        };

        self.onBeforeBinding = function() {
            console.log('Binding JuliaPrintRestoreViewModel')

            self.Config = self.VM_settings.settings.plugins.TwinDragonPrintRestore;

            console.log(self.Config);
        };
    }

    OCTOPRINT_VIEWMODELS.push([
        JuliaPrintRestoreViewModel,
        ["settingsViewModel"],
        ["#settings_julia_print_restore"]
    ]);
});
