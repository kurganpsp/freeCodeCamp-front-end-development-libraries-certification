class App extends React.Component {
        constructor(props) {
          super(props);
          this.state = { markdown: "" };
          this.handleChange = this.handleChange.bind(this);
        }
        handleChange(event) {
          this.setState({ markdown: event.target.value });
        }
        render() {
          return (
            <div>
                <div className="row">
                  <div className="editorWrap">
					<div class="toolbar">Editor de Markdown</div>
                    <textarea
                      id="editor"
                      className="form-control"
                      value={this.state.markdown}
                      onChange={this.handleChange}
                      style={{ width: "100%", height: "50vh" }}
                    />					
                  </div>
				  <div class="converter"></div>
                  <div className="previewWrap">
					<div class="toolbar">Previsualizador</div>
                    <div id="preview"
                      dangerouslySetInnerHTML={{
                        __html: marked(this.state.markdown)
                      }}
                    />
                  </div>
              </div>
            </div>
          );
        }
      }
      ReactDOM.render(<App />, document.getElementById("app"));