package com.tengu;

import com.tengu.models.Story;
import com.tengu.models.User;
import com.tengu.services.StoryService;
import com.tengu.services.UserService;
import org.hibernate.engine.jdbc.ClobProxy;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import java.time.LocalDate;
import java.util.UUID;

@SpringBootApplication
public class TenguPortalApplication {

    public static void main(String[] args) {
        SpringApplication.run(TenguPortalApplication.class, args);
    }

    //mock
    @Bean
    CommandLineRunner runner(StoryService storyService, UserService userService) {
        return args -> {
            User user1 = userService.save(
                    new User(
                            UUID.randomUUID(),
                            User.Role.AUTHOR,
                            "ppp@ppp.com",
                            "123",
                            "Galaxia",
                            LocalDate.now(),
                            LocalDate.now(),
                            100
                    )
            );

            User user2 = userService.save(
                    new User(
                            UUID.randomUUID(),
                            User.Role.AUTHOR,
                            "ooo@ooo.com",
                            "234",
                            "Garett",
                            LocalDate.now(),
                            LocalDate.now(),
                            100
                    )
            );

            User user3 = userService.save(
                    new User(
                            UUID.randomUUID(),
                            User.Role.READER,
                            "iii@iii.com",
                            "123",
                            "Leimy",
                            LocalDate.now(),
                            LocalDate.now(),
                            100
                    )
            );

            User user4 = userService.save(
                    new User(
                            UUID.randomUUID(),
                            User.Role.ADMINISTRATOR,
                            "uuu@uuu.com",
                            "234",
                            "Neo",
                            LocalDate.now(),
                            LocalDate.now(),
                            100
                    )
            );

            storyService.save(
                    new Story(
                            UUID.randomUUID(),
                            "First",
                            "<style>body {\n" + "  color: #404040;\n" +
                                    "  font: 100 1em/150% \"proxima-nova\", Helvetica, sans-serif;\n" + "}\n" + "\n" +
                                    ".wrapper {\n" + "  max-width: 1200px;\n" + "  margin: auto;\n" + "}\n" + "\n" +
                                    "h1, h2, h3, h4 {\n" + "  font-weight: 900;\n" + "  color: #333;\n" +
                                    "  margin: 1.5em 0 0.5em;\n" + "}\n" + "\n" + "h1 {\n" + "  font-size: 2em;\n" +
                                    "}\n" + "\n" + "h2 {\n" + "  font-size: 1.8em;\n" + "}\n" + "\n" + "h3 {\n" +
                                    "  font-size: 1.5em;\n" + "}\n" + "\n" + "h4 {\n" + "  font-size: 1.3em;\n" +
                                    "}\n" + "\n" + "strong {\n" + "  font-weight: 600;\n" + "}\n" + "\n" + "hr {\n" +
                                    "  border: none;\n" + "  height: 1px;\n" +
                                    "  background-color: rgba(51, 153, 204, 0.2);\n" + "}\n" + "\n" +
                                    ".img-placeholder {\n" +
                                    "  background-image: url(\"http://placehold.it/200x100/CC99CC/ffffff&text=Feature\");\n" +
                                    "  background-size: cover;\n" + "  min-height: 100px;\n" + "  min-width: 100px;\n" +
                                    "}\n" + "\n" + "/*Basic Grid Styles*/\n" + ".Grid {\n" + "  display: flex;\n" +
                                    "  flex-flow: row;\n" + "  flex-wrap: wrap;\n" + "}\n" + "\n" +
                                    ".u-textCenter {\n" + "  text-align: center;\n" + "}\n" + "\n" + ".Grid-cell {\n" +
                                    "  flex: 1;\n" + "}\n" + "\n" + ".Demo {\n" + "  padding: .8em 1em 0;\n" +
                                    "  margin-bottom: 1em;\n" + "  background: rgba(51, 153, 204, 0.2);\n" +
                                    "  transition: background-color 0.3s ease;\n" + "  border: 1px solid #33cccc;\n" +
                                    "  border-radius: 3px;\n" + "}\n" + ".Demo:after {\n" + "  content: \"\";\n" +
                                    "  display: block;\n" + "  margin-top: .8em;\n" + "  height: 1px;\n" + "}\n" +
                                    ".Demo:hover {\n" + "  background: rgba(51, 153, 204, 0.6);\n" + "}\n" + "\n" +
                                    ".Demo.Holly {\n" + "  background: rgba(102, 51, 255, 0.1);\n" + "}\n" +
                                    ".Demo.Holly:hover {\n" + "  background: rgba(102, 51, 255, 0.25);\n" + "}\n" +
                                    "\n" + "/* With gutters*/\n" + ".Grid--gutters {\n" + "  margin-left: -1em;\n" +
                                    "}\n" + ".Grid--gutters .Grid-cell {\n" + "  padding-left: 1em;\n" + "}\n" +
                                    ".Grid--gutters .Grid--nested .Grid-cell:first-of-type .Demo {\n" +
                                    "  margin-right: 1em;\n" + "}\n" + "\n" + "/* Justify per row*/\n" +
                                    ".Grid--right {\n" + "  justify-content: flex-end;\n" + "}\n" + "\n" +
                                    ".Grid--center {\n" + "  justify-content: center;\n" + "}\n" + "\n" +
                                    "/* Alignment per row */\n" + ".Grid--top {\n" + "  align-items: flex-start;\n" +
                                    "}\n" + "\n" + ".Grid--bottom {\n" + "  align-items: flex-end;\n" + "}\n" + "\n" +
                                    ".Grid--center {\n" + "  align-items: center;\n" + "}\n" + "\n" +
                                    "/* Alignment per cell */\n" + ".Grid-cell--top {\n" +
                                    "  align-self: flex-start;\n" + "}\n" + "\n" + ".Grid-cell--bottom {\n" +
                                    "  align-self: flex-end;\n" + "}\n" + "\n" + ".Grid-cell--center {\n" +
                                    "  align-self: center;\n" + "}\n" + "\n" + ".navigation {\n" +
                                    "  list-style: none;\n" + "  /*background: deepskyblue;*/\n" +
                                    "  background: rgba(102, 51, 255, 0.1);\n" + "  margin: 0 0 1em;\n" +
                                    "  border: 1px solid #33cccc;\n" + "  border-radius: 3px;\n" +
                                    "  display: flex;\n" + "  -webkit-flex-flow: row wrap;\n" +
                                    "  justify-content: flex-end;\n" + "}\n" + ".navigation a {\n" +
                                    "  text-decoration: none;\n" + "  display: block;\n" + "  padding: 1em;\n" +
                                    "  color: #333;\n" + "}\n" + ".navigation a:hover {\n" +
                                    "  background: rgba(64, 0, 255, 0.1);\n" + "  border-radius: 3px;\n" + "}\n" +
                                    ".navigation:hover {\n" + "  background: rgba(102, 51, 255, 0.25);\n" + "}\n" +
                                    "\n" + "@media all and (max-width: 800px) {\n" + "  .navigation {\n" +
                                    "    justify-content: space-around;\n" + "  }\n" + "}\n" +
                                    "@media all and (max-width: 600px) {\n" + "  .navigation {\n" +
                                    "    -webkit-flex-flow: column wrap;\n" + "    flex-flow: column wrap;\n" +
                                    "    padding: 0;\n" + "  }\n" + "  .navigation a {\n" +
                                    "    text-align: center;\n" + "    padding: 10px;\n" +
                                    "    border-top: 1px solid rgba(255, 255, 255, 0.3);\n" +
                                    "    border-bottom: 1px solid rgba(0, 0, 0, 0.1);\n" + "  }\n" +
                                    "  .navigation li:last-of-type a {\n" + "    border-bottom: none;\n" + "  }\n" +
                                    "}\n" + "/*===========================================*/\n" +
                                    "/* Base classes for all media - Mobile first */\n" +
                                    ".Grid--cols-2 > .Grid-cell {\n" + "  flex: 0 0 100%;\n" + "}\n" + "\n" +
                                    ".Grid--cols-3 > .Grid-cell {\n" + "  flex: 0 0 100%;\n" + "}\n" + "\n" +
                                    ".Grid--cols-4 > .Grid-cell {\n" + "  flex: 0 0 100%;\n" + "}\n" + "\n" +
                                    ".Grid--cols-6 > .Grid-cell {\n" + "  flex: 0 0 calc(50% - 1em);\n" + "}\n" + "\n" +
                                    ".Grid--cols-12 > .Grid-cell {\n" + "  flex: 0 0 calc(33.3333% - 1em);\n" + "}\n" +
                                    "\n" + ".Grid--holly-grail .aside, .Grid--holly-grail .main {\n" +
                                    "  flex: 1 100%;\n" + "}\n" + "\n" + "/* One of -- columns*/\n" +
                                    ".Grid--1of2 > .Grid-cell,\n" + ".Grid--1of4 > .Grid-cell:first-of-type,\n" +
                                    ".Grid--1of3 > .Grid-cell:first-of-type {\n" + "  flex: 0 0 100%;\n" + "}\n" +
                                    "\n" + ".Grid--1of6 > .Grid-cell:first-of-type {\n" + "  flex: 0 0 50%;\n" + "}\n" +
                                    "\n" + ".Grid--fit > .Grid-cell {\n" + "  flex: 1;\n" + "}\n" + "\n" +
                                    ".Grid--full > .Grid-cell {\n" + "  flex: 0 0 100%;\n" + "}\n" + "\n" +
                                    "/* Tablet (medium) screens */\n" + "@media (min-width: 30em) {\n" +
                                    "  .Grid--cols-4 > .Grid-cell {\n" + "    flex: 0 0 calc(50% - 1em);\n" + "  }\n" +
                                    "\n" + "  .Grid--cols-6 > .Grid-cell {\n" +
                                    "    flex: 0 0 calc(33.3333% - 1em);\n" + "  }\n" + "\n" +
                                    "  .Grid--cols-12 > .Grid-cell {\n" + "    flex: 0 0 calc(16.6666% - 1em);\n" +
                                    "  }\n" + "\n" + "  .Grid--holly-grail .aside {\n" +
                                    "    flex: 1 calc(25% - 1em);\n" + "  }\n" + "\n" +
                                    "  .Grid--1of2 > .Grid-cell {\n" + "    flex: 0 0 50%;\n" + "  }\n" + "\n" +
                                    "  .Grid--1of6 > .Grid-cell:first-of-type {\n" + "    flex: 0 0 30%;\n" + "  }\n" +
                                    "\n" + "  .Grid--1of4 > .Grid-cell:first-of-type {\n" + "    flex: 0 0 50%;\n" +
                                    "  }\n" + "\n" + "  .Grid--1of3 > .Grid-cell:first-of-type {\n" +
                                    "    flex: 0 0 100%;\n" + "  }\n" + "}\n" + "/* Large screens */\n" +
                                    "@media (min-width: 48em) {\n" + "  .Grid--cols-2 > .Grid-cell,\n" +
                                    "  .Grid--cols-3 > .Grid-cell,\n" + "  .Grid--cols-4 > .Grid-cell,\n" +
                                    "  .Grid--cols-6 > .Grid-cell,\n" + "  .Grid--cols-12 > .Grid-cell {\n" +
                                    "    flex: 1;\n" + "  }\n" + "\n" + "  .Grid--holly-grail .main {\n" +
                                    "    flex: 2;\n" + "  }\n" + "  .Grid--holly-grail .aside {\n" + "    flex: 1;\n" +
                                    "  }\n" + "  .Grid--holly-grail .aside-1 {\n" + "    order: 1;\n" + "  }\n" +
                                    "  .Grid--holly-grail .main {\n" + "    order: 2;\n" + "  }\n" +
                                    "  .Grid--holly-grail .aside-2 {\n" + "    order: 3;\n" + "  }\n" + "\n" +
                                    "  .Grid--1of2 > .Grid-cell {\n" + "    flex: 0 0 50%;\n" + "  }\n" + "\n" +
                                    "  .Grid--1of6 > .Grid-cell:first-of-type {\n" + "    flex: 0 0 16.6666%;\n" +
                                    "  }\n" + "\n" + "  .Grid--1of4 > .Grid-cell:first-of-type {\n" +
                                    "    flex: 0 0 25%;\n" + "  }\n" + "\n" +
                                    "  .Grid--1of3 > .Grid-cell:first-of-type {\n" + "    flex: 0 0 30%;\n" + "  }\n" +
                                    "\n" + "  .Grid--gutters.Grid--nested .Grid-cell:first-of-type .Demo {\n" +
                                    "    margin-right: 0;\n" + "  }\n" + "}\n" + ".content-1of1::before {\n" +
                                    "  content: \"1\";\n" + "}\n" + "\n" + ".content-1of2::before {\n" +
                                    "  content: \"1/2\";\n" + "}\n" + "\n" + ".content-1of3::before {\n" +
                                    "  content: \"1/3\";\n" + "}\n" + "\n" + ".content-1of4::before {\n" +
                                    "  content: \"1/4\";\n" + "}\n" + "\n" + ".content-1of6::before {\n" +
                                    "  content: \"1/6\";\n" + "}\n" + "\n" + ".content-1of12::before {\n" +
                                    "  content: \"1/12\";\n" + "}</style>\n" + " <div class=\"wrapper\">\n" +
                                    "    <p>Responsive grid with Flexbox</p>\n" + "  <h1>Basic Grid</h1>\n" +
                                    "    <p></p>\n" + "  <div class=\"Grid Grid--full u-textCenter\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of1\"></div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--cols-2 u-textCenter\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of2\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of2\"></div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--cols-3 u-textCenter\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--cols-4 u-textCenter\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of4\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of4\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of4\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of4\"></div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--cols-6 u-textCenter\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "  </div>\n" + "    \n" +
                                    "  <div class=\"Grid Grid--gutters Grid--cols-12 u-textCenter\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of12\"></div></div>\n" +
                                    "  </div>  \n" + "  <hr />  \n" + "    \n" +
                                    "  <h1>Sidebar and main content</h1>\n" +
                                    "  <div class=\"Grid Grid--gutters Grid--1of6\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of6\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">auto</div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--1of4\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of4\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">auto</div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--1of3\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">auto</div></div>\n" +
                                    "  </div> \n" + "  <hr /> \n" + "    \n" +
                                    "  <h1>Left / Center / Right content alignment</h1>\n" +
                                    "  <div class=\"Grid Grid--gutters Grid--1of2\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of2\"></div></div>\n" +
                                    "  </div>\n" + "\n" +
                                    "  <div class=\"Grid Grid--gutters Grid--1of2 Grid--center\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of2\"></div></div>\n" +
                                    "  </div>\n" + "    \n" +
                                    "  <div class=\"Grid Grid--gutters Grid--1of2 Grid--right\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of2\"></div></div>\n" +
                                    "  </div>\n" + "  <hr />   \n" + "    \n" + " <h1>Nesting</h1>\n" +
                                    "  <div class=\"Grid Grid--gutters Grid--1of3 Grid--nested\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">     \n" +
                                    "      <div class=\"Grid Grid--gutters Grid--1of3 Grid--nested\">\n" +
                                    "        <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "        <div class=\"Grid-cell\"><div class=\"Demo\">\n" +
                                    "          <div class=\"Grid Grid--gutters Grid--1of3 Grid--nested\">\n" +
                                    "            <div class=\"Grid-cell\"><div class=\"Demo content-1of3\"></div></div>\n" +
                                    "            <div class=\"Grid-cell\"><div class=\"Demo\">auto</div></div>\n" +
                                    "          </div>        \n" + "        </div></div>\n" + "      </div>      \n" +
                                    "    </div>\n" + "    </div>\n" + "  </div>\n" + "  <hr /> \n" + "    \n" +
                                    "  <h1>Vertical alignment</h1>\n" +
                                    "  <div class=\"Grid Grid--gutters Grid--cols-3 Grid--top\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">This cell should be <strong>top-aligned</strong>.</div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">Vice keytar actually DIY Thundercats. Flannel heirloom lo-fi Blue Bottle Intelligentsia pour-over Etsy church-key banh mi Marfa lomo yr messenger bag.Artisan try-hard food truck +1 Cosby sweater.</div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">Letterpress YOLO Austin Pinterest Helvetica. Cliche pug literally, church-key 90's twee you probably haven't heard of them meh fixie cornhole banh mi pork belly mustache. Stumptown bespoke Vice, bitters sustainable hoodie Echo Park letterpress 8-bit pug. Quinoa meh flexitarian roof party, actually selvage Carles put a bird on it umami vegan ethical. </div></div>\n" +
                                    "  </div>\n" + "  <div class=\"Grid Grid--gutters Grid--cols-3 Grid--center\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">This cell should be <strong>center-aligned</strong>.</div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">Vice keytar actually DIY Thundercats. Flannel heirloom lo-fi Blue Bottle Intelligentsia pour-over Etsy church-key banh mi Marfa lomo yr messenger bag.Artisan try-hard food truck +1 Cosby sweater.</div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">Letterpress YOLO Austin Pinterest Helvetica. Cliche pug literally, church-key 90's twee you probably haven't heard of them meh fixie cornhole banh mi pork belly mustache. Stumptown bespoke Vice, bitters sustainable hoodie Echo Park letterpress 8-bit pug. Quinoa meh flexitarian roof party, actually selvage Carles put a bird on it umami vegan ethical. </div></div>\n" +
                                    "  </div>\n" + "    \n" +
                                    "  <div class=\"Grid Grid--gutters Grid--cols-3 Grid--bottom\">\n" +
                                    "   <div class=\"Grid-cell\"><div class=\"Demo\">This cell should be <strong>bottom-aligned</strong>.</div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">Vice keytar actually DIY Thundercats. Flannel heirloom lo-fi Blue Bottle Intelligentsia pour-over Etsy church-key banh mi Marfa lomo yr messenger bag.Artisan try-hard food truck +1 Cosby sweater.</div></div>\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo\">Letterpress YOLO Austin Pinterest Helvetica. Cliche pug literally, church-key 90's twee you probably haven't heard of them meh fixie cornhole banh mi pork belly mustache. Stumptown bespoke Vice, bitters sustainable hoodie Echo Park letterpress 8-bit pug. Quinoa meh flexitarian roof party, actually selvage Carles put a bird on it umami vegan ethical. </div></div>\n" +
                                    "  </div>\n" + "   <hr />  \n" + " \n" + "    \n" +
                                    "   <h1>Holly Grail page layout</h1>   \n" +
                                    "    <p>Note: in responsive view Aside 1 and Aside 2 elements stack below the Main content.</p>\n" +
                                    "  <div class=\"Grid Grid--full Grid--nested header\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo Holly\">\n" +
                                    "      <img src=\"http://placehold.it/100x50/CC99CC/ffffff&text=Logo\" style=\"vertical-align: middle;\"><strong> Header / Logo</strong>\n" +
                                    "    </div></div>   \n" + "  </div>\n" + "    \n" + "    \n" +
                                    "  <div class=\"Grid Grid--full\">\n" + "    <div class=\"Grid-cell\">\n" +
                                    "      <ul class=\"navigation\">\n" + "      <li><a href=\"#\">Home</a></li>\n" +
                                    "      <li><a href=\"#\">About</a></li>\n" +
                                    "      <li><a href=\"#\">Products</a></li>\n" +
                                    "      <li><a href=\"#\">Contact</a></li>\n" + "    </ul>\n" + "    </div>\n" +
                                    "  </div>  \n" + " \n" +
                                    "  <div class=\"Grid Grid--gutters Grid--holly-grail\">\n" +
                                    "    <div class=\"Grid-cell main\">\n" + "      <div class=\"Demo Holly\">\n" +
                                    "        <strong>Main</strong>\n" +
                                    "        <p>Salvia Helvetica ethical lo-fi, artisan messenger bag put a bird on it. Photo booth taxidermy kale chips, Carles Thundercats retro blog paleo. 8-bit four loko jean shorts, church-key tattooed bespoke normcore art party salvia organic vinyl letterpress distillery. You probably haven't heard of them tofu food truck, Echo Park salvia Schlitz heirloom scenester ennui biodiesel Intelligentsia +1 church-key. Bitters meh actually quinoa, YOLO pug authentic. Kitsch health goth paleo, pop-up tofu authentic gluten-free whatever yr Brooklyn irony. Banjo Tumblr you probably haven't heard of them literally aesthetic, wolf put a bird on it Kickstarter yr.</p>\n" +
                                    "      </div>\n" + "    </div>\n" +
                                    "    <div class=\"Grid-cell aside aside-1\">\n" +
                                    "      <div class=\"Demo Holly\"><strong>Aside 1</strong><br />\n" +
                                    "        <div class=\"img-placeholder\"></div>\n" + "        \n" +
                                    "        Chocolate cake fruitcake icing muffin applicake chocolate.\n" +
                                    "      </div>\n" + "    </div>\n" +
                                    "    <div class=\"Grid-cell aside aside-2\">\n" +
                                    "      <div class=\"Demo Holly\">\n" + "        <strong>Aside 2</strong>\n" +
                                    "        <p>Hashtag deep v PBR, chillwave banjo mlkshk readymade fixie crucifix. Tattooed Tumblr direct trade trust fund swag gluten-free.</p>\n" +
                                    "      </div>\n" + "    </div>\n" + "  </div>  \n" + "  \n" +
                                    "  <div class=\"Grid Grid--full\">\n" +
                                    "    <div class=\"Grid-cell\"><div class=\"Demo Holly\"><strong>Footer</strong><br /> Copyright &copy; Jelly-o apple pie pie chocolatebar.com</div></div>\n" +
                                    "  </div>\n" + "    <hr />\n" +
                                    "    <p>Some ideas are borrowed from Phillip Walton's Solved by Flexbox project. </p>\n" +
                                    "    <br />\n" + " </div>",
                            LocalDate.now(),
                            user1,
                            12
                    )
            );
            storyService.save(
                    new Story(
                            UUID.randomUUID(),
                            "Second",
                        "\n" + "<!doctype html>\n" + "<html>\n" + "<head>\n" + "<meta charset=\"utf-8\">\n" +
                                "<meta http-equiv=\"X-UA-Compatible\" content=\"IE=edge,chrome=1\">\n" +
                                "<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\">\n" +
                                "<title>Responsive CSS Only Accordion &amp; Tabs Demo</title>\n" + "<style>\n" + "\n" +
                                "\n" + "\n" + ".tabs {\n" + "  display: -webkit-box;\n" + "  display: -webkit-flex;\n" +
                                "  display: -ms-flexbox;\n" + "  display: flex;\n" + "  -webkit-flex-wrap: wrap;\n" +
                                "  -ms-flex-wrap: wrap;\n" + "  flex-wrap: wrap;\n" + "}\n" + "\n" + ".tabs label {\n" +
                                "  -webkit-box-ordinal-group: 2;\n" + "  -webkit-order: 1;\n" +
                                "  -ms-flex-order: 1;\n" + "  order: 1;\n" + "  display: block;\n" +
                                "  padding: 1rem 2rem;\n" + "  margin-right: 0.2rem;\n" + "  cursor: pointer;\n" +
                                "  background: #90CAF9;\n" + "  font-weight: bold;\n" +
                                "  -webkit-transition: background ease 0.2s;\n" +
                                "  transition: background ease 0.2s;\n" + "}\n" + "\n" + ".tabs .tab {\n" +
                                "  -webkit-box-ordinal-group: 100;\n" + "  -webkit-order: 99;\n" +
                                "  -ms-flex-order: 99;\n" + "  order: 99;\n" + "  -webkit-box-flex: 1;\n" +
                                "  -webkit-flex-grow: 1;\n" + "  -ms-flex-positive: 1;\n" + "  flex-grow: 1;\n" +
                                "  width: 100%;\n" + "  display: none;\n" + "  padding: 1rem;\n" +
                                "  background: #fafafa;\n" + "}\n" + "\n" + ".tabs input[type=\"radio\"] {\n" +
                                "  position: absolute;\n" + "  opacity: 0;\n" + "}\n" + "\n" +
                                ".tabs input[type=\"radio\"]:checked + label { background: #fafafa; }\n" + "\n" +
                                ".tabs input[type=\"radio\"]:checked + label + .tab { display: block; }\n" +
                                " @media (max-width: 45em) {\n" + "\n" + ".tabs .tab,  .tabs label {\n" +
                                "  -webkit-box-ordinal-group: NaN;\n" + "  -webkit-order: initial;\n" +
                                "  -ms-flex-order: initial;\n" + "  order: initial;\n" + "}\n" + "\n" +
                                ".tabs label {\n" + "  width: 100%;\n" + "  margin-right: 0;\n" +
                                "  margin-top: 0.2rem;\n" + "}\n" + "}\n" + "\n" + "/**\n" + " * Generic Styling\n" +
                                "*/\n" + "\n" + "body {\n" + "  background: #3498DB;\n" + "  padding: 10vw;\n" +
                                "  font-family: \"Roboto\", Helvetica, Arial, \"Lucida Grande\", sans-serif;\n" +
                                "  font-weight: 300;\n" + "  line-height: 1.6;\n" + "  max-width: 60rem;\n" +
                                "  margin: 0 auto;\n" + "  font-size: 112%;\n" + "}\n" + "</style>\n" + "</head>\n" +
                                "\n" + "<body>\n" + "<h1>Responsive CSS Only Accordion & Tabs Demo</h1>\n" +
                                "<div class=\"css-script-ads\" style=\"margin:30px auto\" align=\"center\">\n" +
                                "    <script type=\"text/javascript\"><!--\n" +
                                "google_ad_client = \"ca-pub-2783044520727903\";\n" + "/* CSSScript Demo Page */\n" +
                                "google_ad_slot = \"3025259193\";\n" + "google_ad_width = 728;\n" +
                                "google_ad_height = 90;\n" + "//-->\n" + "</script>\n" +
                                "      <script type=\"text/javascript\"\n" +
                                "src=\"http://pagead2.googlesyndication.com/pagead/show_ads.js\">\n" +
                                "</script></div>\n" + "<div class=\"tabs\">\n" +
                                "  <input type=\"radio\" name=\"tabs\" id=\"tabone\" checked=\"checked\">\n" +
                                "  <label for=\"tabone\">Tab One</label>\n" + "  <div class=\"tab\">\n" +
                                "    <h1>Tab One Content</h1>\n" +
                                "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n" +
                                "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n" +
                                "  </div>\n" + "  <input type=\"radio\" name=\"tabs\" id=\"tabtwo\">\n" +
                                "  <label for=\"tabtwo\">Tab Two</label>\n" + "  <div class=\"tab\">\n" +
                                "    <h1>Tab Two Content</h1>\n" +
                                "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n" +
                                "  </div>\n" + "  <input type=\"radio\" name=\"tabs\" id=\"tabthree\">\n" +
                                "  <label for=\"tabthree\">Tab Three</label>\n" + "  <div class=\"tab\">\n" +
                                "    <h1>Tab Three Content</h1>\n" +
                                "    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>\n" +
                                "  </div>\n" + "</div>\n" + "<script>\n" +
                                "  (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n" +
                                "  (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n" +
                                "  m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n" +
                                "  })(window,document,'script','//www.google-analytics.com/analytics.js','ga');\n" +
                                "\n" + "  ga('create', 'UA-46156385-1', 'cssscript.com');\n" +
                                "  ga('send', 'pageview');\n" + "\n" + "</script>\n" + "</body>\n" + "</html>\n"
                            ,LocalDate.now(),
                            user1,
                            23
                    )
            );
            storyService.save(
                    new Story(
                            UUID.randomUUID(),
                            "Third",
                            "RxJS is one of the hottest libraries in web development today. Offering a powerful, " +
                                    "functional approach for dealing with events and with integration points into a " +
                                    "growing number of frameworks, libraries, and utilities, the case for learning Rx" +
                                    " has never been more appealing. Couple this with the ability to utilize your " +
                                    "knowledge across nearly any language, having a solid grasp on reactive " +
                                    "programming and what it can offer seems like a no-brainer.\n" +
                                    "But...\n" +
                                    "Learning RxJS and reactive programming is hard. There's the multitude of " +
                                    "concepts, large API surface, and fundamental shift in mindset from an imperative" +
                                    " to declarative style. This site focuses on making these concepts approachable, " +
                                    "the examples clear and easy to explore, and features references throughout to " +
                                    "the best RxJS related material on the web. The goal is to supplement the " +
                                    "official docs and pre-existing learning material while offering a new, fresh " +
                                    "perspective to clear any hurdles and tackle the pain points. Learning Rx may be " +
                                    "difficult but it is certainly worth the effort!<img alt=\"\" " +
                                "src=\"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAABGdBTUEAALGPC/xhBQAAAwBQTFRFAAAAUSyGVC2IWSqHWyyIVDCJWTSLXDqPXjyQZieIYyuIbieIaC6HayuJazCKbziPaj2SdSWJcyqJeyWJeyqKczSOdzuRaEWVdEuaclSefVWffFegfWGlmByKgyWKgymLjSaMiiiMhTGPijeSkyaMkimNmySNmCuPkS+QlDOSoh2Krh6Nsx2NuxqNoyKNqiCNpSuRpziXsiCNuSCOtyqTviKQvC+WtjaYiEiZhVOflkWahFujjlSgmFijgmOmgmaogmipiGmqjXWwk2Knl3Oxk3u0m3izpUadqk+iqFqnuE2jt1yqvVyrqGWrpG6wqXWzs2Wtun25xBaMwRiNyxOMyhqNwR+Qyh6R3g6M0xKN0RqO2hCN2hmO1BuQxCWTwS6WzCKTzCqWxjib0SSV0y+a2CKU3Tae3D+i4wuN6wuO5BWO4BiO7BWO7BiP4RWQ6BOR7BqS7SSV7SGY7iiX7SuZ4zKd7TGc7jme7jui8D6iyUKhwl2szFSp1ECh0Uqm10+o20Kk20mm3E2p11es3l+xzGKwynm602Kx3GKy2Wy203S51Xu82nS66kWm4FWt5Vmv6FKt4V2w61ew7l6z8Eam8Emn8Eyp8FOt8Vmu8Vyx52e24nO65Hq+7HG86Hm+8mOz8mu38m668nO883m+833BmoK3pYm8o5C/tYe9qpbDvIzBtpbEsqHJuKnNxozCypfH0YfB2oPB3orE1JvLxaXNw6nPxa3Qw7TUxrvYy7bW1aLO1azS3aTQ3avT1rTW5ITD5IrF5o7I64HC7ovI45HJ5JrN65PK7JzO7p7Q9IXE9YrG9Y3I9ZPK9prO9p/Q5KHQ5q7W6aPR663X7q7Y5rnb7bPZ67/f9aPT9arV+KXT+KnV9LPa87re+LPb+bve1cTd1srh2tLl3tjo68Hf58fh4szj7sTh7Mzk59jp9MLh8cnk+cPi+snk+s/o89Tp99/v+tTq+tvt6eLu7OXx7ujx8+Xx8+vz++Tx++v18/D29vL4/fD3+/P5/fz9AAAAAAAAF96voAAAAQB0Uk5T////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////AFP3ByUAAAAJcEhZcwAAFiQAABYkAZsVxhQAAAAYdEVYdFNvZnR3YXJlAHBhaW50Lm5ldCA0LjEuNv1OCegAABSPSURBVHhexVsNkFvVebWE1sWLtePdlQ0Z2JVky5vX1S+7JBAaD7SUDM4kUCStLLG7nhAyjbTWH9Rx44QZflsnoW6bxjGYpGUMDiU4g0vcYEiDTaiTBgNNUkozhtoxnQEvMQQbiu1gvXk957v36We9P9pdzfR4V6vVPumce76fe999zwus/2fMUoCpf7YOTQs4ffjBLTeXb755/RcffPGEfq0VaFJA5blyOU+ox3vf0q/PH80JOLG+UMgXSvk8HgsQUMg/cEr/ab5oSsCpDcIKyPj5WN7QIhOaEVAhvyIXIZQCCYf0n+eHJgSYW9XY5bFQKOfXjQ6FQwPR6KeAL3/5R0d/O5/aaELAdg7ddmAkFe3r6/twX8SIRiKRaDAYDQVDoY/e+vgvKvrwWWJmAc+TuUwHSqlYwB9YGfhwoA/kkVgsFo1GB8AfCgODm/YfnYMVMwr4dz34wmh0pS/gMwIBAxYYavgh4Sd9OJwIh+Nr/+o3s9Uwk4DnaXy+UBz0eb1+vy8QCIA+EumPRWPRfvgfGgiHRUECiCfi8Rv3ndZvbQ7TCzAfktQbi/pJ71/p8xl9oiDWHwnS/2hI0WP8FJAE4mu+NRsJ0wkwD21l3RWjXgD0fgaA/H0xcSA6MBAagAPkB4ZATgXALFyYUkDlxAsb4X2+EPZ7PTJ+vx/0Ro/B8YM9GMT49fCJKjtx0380WxSTCDCPv/jg1g1lNF5gNODxgF9Z4JPh9/X1Q0F/MBgLhQaFHwqGqvQZhdFf6o+bAWcJOPEQ+h66jWq4A54uJYAZEIjQANQfKyCGGgA5vsmP4SsFmp64/VX9kdNiggDzBbCTW1rfiA/0yz0IAegHR/Kl0tBH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\" />"
                            ,LocalDate.now(),
                            user2,
                            45
                    )
            );
        };
    }

}
