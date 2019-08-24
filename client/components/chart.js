import React, { Component } from 'react';
import { render } from 'react-dom'
import { ResponsiveBubble } from '@nivo/circle-packing'

class chart extends Component {
    tooltip(event) {
            return (
                <div>arvind</div>
            );
    }
    render() { 
        return(
            <div className="div-height">
                <ResponsiveBubble
                    root={{
                        "name": "Events",
                        "color": "hsl(263, 70%, 50%)",
                        "children": [
                            {
                                "name": "Corporate LMS",
                                "color": "hsl(243, 50%, 50%)",
                                "children": [
                                    {
                                    "name": "Skill",
                                    "color": "hsl(24, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "Certification",
                                            "color": "hsl(34, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "compliance",
                                            "color": "hsl(56, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal1 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard1 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie1 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "training",
                                            "color": "hsl(84, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal1 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard1 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie1 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Arnal11 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard11 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie11 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        }
                                    ]
                                    },
                                    {
                                    "name": "DM Actions",
                                    "color": "hsl(262, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "Certification",
                                            "color": "hsl(34, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "compliance",
                                            "color": "hsl(56, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal1 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard1 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie1 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "training",
                                            "color": "hsl(84, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal1 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard1 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie1 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Arnal11 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard11 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie11 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        }
                                    ]
                                    },
                                    {
                                    "name": "Community",
                                    "color": "hsl(179, 70%, 50%)",
                                    "children": [
                                        {
                                            "name": "Certification",
                                            "color": "hsl(34, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                }
                                            ]
                                        },
                                        {
                                            "name": "compliance",
                                            "color": "hsl(56, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal1 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                } 
                                            ]
                                        },
                                        {
                                            "name": "training",
                                            "color": "hsl(84, 70%, 50%)",
                                            "children": [
                                                {
                                                    "name": "Arnal1 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "hawabard1 colison",
                                                    "color": "hsl(56, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Ann-marie1 Tipens",
                                                    "color": "hsl(84, 70%, 50%)",
                                                    "loc": 1
                                                },
                                                {
                                                    "name": "Arnal11 Sajpa",
                                                    "color": "hsl(34, 70%, 50%)",
                                                    "loc": 1
                                                } 
                                            ]
                                        }
                                    ]
                                    } 
                                ]
                            }, 
                            {
                                "name": "Corenerstone",
                                "color": "hsl(243, 50%, 50%)",
                                "children": [
                                    {
                                    "name": "Skill",
                                    "color": "hsl(24, 70%, 50%)",
                                    "loc": 90 
                                    },
                                    {
                                    "name": "DM Actions",
                                    "color": "hsl(262, 70%, 50%)",
                                    "loc": 29 
                                    },
                                    {
                                    "name": "Community",
                                    "color": "hsl(179, 70%, 50%)",
                                    "loc": 37 
                                    } 
                                ]
                            },
                            {
                                "name": "Litmos",
                                "color": "hsl(243, 50%, 50%)",
                                "children": [
                                    {
                                    "name": "Skill",
                                    "color": "hsl(24, 70%, 50%)",
                                    "loc": 20 
                                    },
                                    {
                                    "name": "DM Actions",
                                    "color": "hsl(262, 70%, 50%)",
                                    "loc": 49 
                                    },
                                    {
                                    "name": "Community",
                                    "color": "hsl(179, 70%, 50%)",
                                    "loc": 37 
                                    } 
                                ]
                            },
                            
                        ]
                    }}
                    margin={{
                        "top": 20,
                        "right": 20,
                        "bottom": 20,
                        "left": 20
                    }}
                    identity="name"
                    value="loc"
                    colors="nivo"
                    colorBy="depth"
                    padding={6}
                    labelTextColor="inherit:darker(0.8)"
                    borderWidth={2}
                    defs={[
                        {
                            "id": "lines",
                            "type": "patternLines",
                            "background": "none",
                            "color": "inherit",
                            "rotation": -45,
                            "lineWidth": 5,
                            "spacing": 8
                        }
                    ]}
                    fill={[
                        {
                            "match": {
                                "depth": 1
                            },
                            "id": "lines"
                        }
                    ]}
                    html = {true}
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
                   
                    tooltip={($event)=>{
                        console.log("arvind", $event);
                            if($event.depth ===3){
                                var s = "";
                                for(var i= 0; i<$event.node.children.length; i++) {
                                    s+= $event.node.children[i].id  ;
                                }
                                return (
                                    <div>{s}</div>
                                );
                            } else {
                                return (
                                    <div>{$event.id} :  {$event.value}</div>
                                );
                            }
                }}
                />
            </div>
        );
    }
    
    // render() {
    //     console.log("chartpage");
    //     return(
    //         <div>
    //             hello chart
    //         </div>
    //     );
    // }
}

export default chart;