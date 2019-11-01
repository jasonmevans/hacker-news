import Component from "@ember/component";

export default class TopStories extends Component {
  // component args
  nToLoad = 10;

  // state
  stories = [];

  async init() {
    super.init();

    this.set(
      "stories",
      await window
        .fetch(
          "https://hacker-news.firebaseio.com/v0/topstories.json?print=pretty"
        )
        .then(async response => {
          return response.json();
        })
    );
  }
}
