    var myApp = angular.module('myApp', []);
     myApp.controller('myController', function ($scope, $http) {
        
        var feed = [];
        $http.get("feed.xml").success(function (xml) {
             $(xml).find("entry").each(function () {
                 var link = $(this).find('link').attr('href');
                 var media = $(this).find('media\\:group');
                 var updatedDate=$(this).find('updated').text();
                 
                 var title=media.find('media\\:title').text();
                 var content=media.find('media\\:content').attr("url");
                 var url=media.find('media\\:thumbnail').attr("url");
                 var description=media.find('media\\:description').text();
                                
                feed.push({"Title":title, "Content":content, "Thumbnail":url, "Description":description,"Link":link,"UpdatedDate":updatedDate});
            });
          
              $scope.feed = feed;
             console.log(feed);
          
            }),
               $scope.predicate='Title';
               $scope.reverse = false;
               $scope.SortBy = function(predicate) {
                   if ($scope.MyOrder == predicate){
                    $scope.reverse = !$scope.reverse;
                      return;
                   }
                $scope.MyOrder = predicate;
                $scope.reverse = false;
              
            }
    });