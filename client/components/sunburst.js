import React, { Component } from 'react';
// import { render } from 'react-dom'
import { ResponsiveBubble } from '@nivo/circle-packing'
import { ResponsiveSunburst } from '@nivo/sunburst'

let asasa;

class chart extends Component {
     
    render() {
        return(
            
            <div className="div-height">
                <ResponsiveSunburst
                    data={{
                        "name": "nivo",
                        "children": [
                            {
                                "name": "Skills",
                                "children": [
                                    {
                                        "name": "Tool Training",
                                        "children": [
                                            {
                                                "name": "Corporate Training",
                                                "value": 16
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Compliance Training",
                                        "children": [
                                            {
                                                "name": "SumTotal",
                                                "value": 16
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Certifications",
                                        "children": [
                                            {
                                                "name": "External Agency",
                                                "value": 13
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "DM Actions",
                                "children": [
                                    {
                                        "name": "Data Governance",
                                        "children": [
                                            {
                                                "name": "Collibra DGC",
                                                "value": 42
                                            },
                                            {
                                                "name": "Informatica Axon",
                                                "value": 30
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Data Quality",
                                        "children": [
                                            {
                                                "name": "Trillium",
                                                "value": 30
                                            },
                                            {
                                                "name": "Informatica DQ",
                                                "value": 38
                                            }
                                        ]
                                    },
                                    {
                                        "name": "DQ Operations",
                                        "children": [
                                            {
                                                "name": "MetricStream",
                                                "value": 17
                                            },
                                            {
                                                "name": "ServiceNow",
                                                "value": 14
                                            },
                                            {
                                                "name": "Jira",
                                                "value": 38
                                            }
                                        ]
                                    }
                                ]
                            },
                            {
                                "name": "Community",
                                "children": [
                                    {
                                        "name": "Collaboration Portal",
                                        "children": [
                                            {
                                                "name": "Dk Discourse",
                                                "value": 32
                                            }
                                        ]
                                    },
                                    {
                                        "name": "Data Consumer",
                                        "children": [
                                            {
                                                "name": "Informatica Axon",
                                                "value": 18
                                            },
                                            {
                                                "name": "Collibra DGC",
                                                "value": 27
                                            }
                                        ]
                                    }
                                ]
                            }
                        ]
                    }}
                    margin={{
                        "top": 20,
                        "right": 20,
                        "bottom": 20,
                        "left": 20
                    }}
                    identity="name"
                    value="value"
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
                    animate={true}
                    motionStiffness={90}
                    motionDamping={12}
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