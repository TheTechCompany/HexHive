export const BaseStyle = {
    global: {
      colors: {
        "brand": '#55556B',//003f49 //054c54
        "light-1": "#EAD9CE",
        "dark-1": "#003f49",
        "neutral-1": "#F3E6DC",
        "neutral-2": "#D6B8A7",
        "neutral-3": "#605755",
        "neutral-4": "#383232",
        "accent-1": "#A3B696",
        "accent-2": "#65695C",
        "accent-3": "",
        placeholder: "#383232"
      }
    },
    tabs: {
        panel: {
            extend:  `display: flex; flex-direction: column;`
        }
    },

    dataTable: {
        header: {
            background: 'accent-2'
        },
        pinned: {
            header: {
                background: 'accent-2'
            }
        }
    },
    select: {
        options: {
            container: {
                background: '#ffffff69'
            }
        }
    },
    layer: {
        background: "neutral-2",
        elevation: 'large'
    }
    
  }