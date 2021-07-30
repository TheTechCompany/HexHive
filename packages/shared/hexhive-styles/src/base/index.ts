export const BaseStyle = {
    global: {
      colors: {
        "brand": '#054c54',//003f49 //054c54
        "light-1": "#EAD9CE",
        "dark-1": "#003f49",
        "neutral-1": "#F3E6DC",
        "neutral-2": "#D6B8A7",
        "neutral-3": "#605755",
        "neutral-4": "#383232",
        "accent-1": "#A3B696",
        "accent-2": "#65695C",

        placeholder: "#383232"
      }
    },
    dataTable: {
        header: {
            background: 'accent-1'
        },
        pinned: {
            header: {
                background: 'accent-1'
            }
        }
    },

    layer: {
        background: "#003f49"
    },
    select: {
      container: {extend: (props: any) => "background:#003f49;"}
    }
    
  }