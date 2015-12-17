/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

        // This test loops through each feed and determines if the URL
        // defined and not empty.
        it('URL defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.url).toBeDefined();
                expect(feed.url.length).not.toBe(0);
            });
        });

        /* TODO: Write a test that loops through each feed
         * in the allFeeds object and ensures it has a name defined
         * and that the name is not empty.
         */
         // This test looped through each feed and determines that each
         // feed has a name and not empty.
         it('name defined and not empty', function() {
            allFeeds.forEach(function(feed) {
                expect(feed.name).toBeDefined();
                expect(typeof feed.name).toEqual('string');
                expect(feed.name.length).toBeGreaterThan(0);
            });
        });
    });


    // Menu test suite.
    describe('The menu', function() {

         // This test ensures the menu element is hidden by default.
         it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
         });

          // This test validates proper functioning of the hamburger menu toggle.
          it('changes visibility when icon clicked', function() {
            var hamburger = $('.menu-icon-link');

            // This tests for menu display.
            hamburger.click();
            expect($('body').hasClass('menu-hidden')).toBe(false);

            // This tests for menu hide.
            hamburger.click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

    // Initial entries test suite.
    describe('Initial Entries', function() {

        var feed;

        // beforeEach allows for use of asynchronous loadFeed().
        beforeEach(function(done) {
            loadFeed(0);
            setTimeout(function() {
                feed = $('.feed').html();
                done();
            }, 100);
        });
        it('should be called and contain at least one feed.', function() {
            expect(feed.length).toBeGreaterThan(0);
        });
    });
    // TODO: Write a new test suite named "New Feed Selection"
    describe('New Feed Selection', function() {

        /* TODO: Write a test that ensures when a new feed is loaded
         * by the loadFeed function that the content actually changes.
         * Remember, loadFeed() is asynchronous.
         */
        var feedOne;
        var feedTwo;

        beforeEach(function(done) {
            loadFeed(0, function() {
                feedOne = $('.feed').html();
                done();
            });
        });

        it('should change feed content', function() {
            loadFeed(1, function() {
                feedTwo = $('.feed').html();
                expect(feedTwo).not.toEqual(feedOne);
                done();
            }, 100);
        });
    });
}());
