
'use strict';

angular.module('example366', ['ngAnimate', 'ngTouch'])
  .controller('MainCtrl', function ($scope) {

    // Set of Photos
    $scope.photos = [
        {src: 'images/image1.jpg', desc: 'Image 01'},
        {src: 'images/image2.jpg', desc: 'Image 02'},
        {src: 'images/image3.jpg', desc: 'Image 03'},
        {src: 'images/image4.jpg', desc: 'Image 04'},
        {src: 'images/image5.jpg', desc: 'Image 05'},
        {src: 'images/image6.jpg', desc: 'Image 06'},
        {src: 'images/image7.jpg', desc: 'Image 07'},

    ];

    // initial image index
    $scope._Index = 0;

    // if a current image is the same as requested image
    $scope.isActive = function (index) {
        return $scope._Index === index;
    };

    // show prev image
    $scope.showPrev = function () {
        $scope._Index = ($scope._Index > 0) ? --$scope._Index : $scope.photos.length - 1;
    };

    // show next image
    $scope.showNext = function () {
        $scope._Index = ($scope._Index < $scope.photos.length - 1) ? ++$scope._Index : 0;
    };

    // show a certain image
    $scope.showPhoto = function (index) {
        $scope._Index = index;
    };
});
