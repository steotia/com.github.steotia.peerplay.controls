EkstepEditor.basePlugin.extend({
    initialize: function() {
    },
    _createGroup: function(props){
        var circle = new fabric.Circle({
          radius: props.btnRadius,
          fill: props.btnColor,
          originX: 'center',
          originY: 'center'
        });

        var text = new fabric.Text(
            props.btnText,
            {
              fill: props.btnFill,
              fontSize: '20',
              fontWeight: 'bold',
              fontFamily: 'monospace',
              originX: 'center',
              originY: 'center'
            }
        );

        var group = new fabric.Group([ circle, text ], {
          left: props.left,
          top: props.top,
        });
        return group;
    },
    newInstance: function() {
        console.log('');
        // what the heck is convertToFabric?
        // var props = this.convertToFabric(this.attributes);

        var props=
          {
            start: {
              "x": 15,
              "y": 25,
              "fill": "#468966",
              "w": 18,
              "h": 32,
              "stroke": "rgba(255, 255, 255, 0)",
              "strokeWidth": 1,
              "opacity": 1,
              "type": "ellipse",
              "radius":50,
              "id":"startBtn"
            },
            srch : {
              "x": 40,
              "y": 25,
              "fill": "#FFB03B",
              "w": 18,
              "h": 32,
              "stroke": "rgba(255, 255, 255, 0)",
              "strokeWidth": 1,
              "opacity": 1,
              "type": "ellipse",
              "radius":50,
              "id":"srchBtn"
            },
            join: {
              "x": 65,
              "y": 25,
              "fill": "#8E2800",
              "w": 18,
              "h": 32,
              "stroke": "rgba(255, 255, 255, 0)",
              "strokeWidth": 1,
              "opacity": 1,
              "type": "ellipse",
              "radius":50,
              "id":"joinBtn"
            }
        };
        var i;
        for(i in props){
          EkstepEditorAPI.instantiatePlugin('org.ekstep.shape', this.convertToFabric(props[i]), EkstepEditorAPI.getCurrentStage());
        }


        // var instance = this;

        // var data = {
        //   start: {
        //     btnRadius: 50,
        //     btnColor: "#468966",
        //     btnText: "START",
        //     btnFill: "#8E2800",
        //     left: 150,
        //     top: 100
        //   },
        //   join: {
        //     btnRadius: 50,
        //     btnColor: "#FFB03B",
        //     btnText: "SEARCH",
        //     btnFill: "#8E2800",
        //     left: 300,
        //     top: 100
        //   },
        //   leave: {
        //     btnRadius: 50,
        //     btnColor: "#8E2800",
        //     btnText: "SOLO",
        //     btnFill: "#FFB03B",
        //     left: 450,
        //     top: 100
        //   }
        // };

        // var startGroup = instance._createGroup(data.start);
        // var joinGroup = instance._createGroup(data.join);
        // var leaveGroup = instance._createGroup(data.leave);
        // var controlGroup = new fabric.Group([ startGroup, joinGroup, leaveGroup ]);
        // instance.setData(data);
        // instance.editorObj = controlGroup;
    },
    onConfigChange: function(key, value) {
        var instance = EkstepEditorAPI.getCurrentObject();
        var editorObj = instance.editorObj;
        // switch (key) {
        //     case "color":
        //         editorObj.setStroke(value);
        //         instance.attributes.stroke = value;
        //         break;
        // }
        EkstepEditorAPI.render();
        EkstepEditorAPI.dispatchEvent('object:modified', { target: EkstepEditorAPI.getEditorObject() });
    }
});

//# sourceURL=peerplay.controls-editor.js
