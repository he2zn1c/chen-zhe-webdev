(function (){
    angular
        .module('Libri')
        .controller('HomeController',HomeController);

    function HomeController(){
        var model = this;
        model.getSearchText = getSearchText;

        function getSearchText(){
            if (model.searchText){
                return model.searchText.replace(/\s/g,'+');
            }
        }

    }
})();