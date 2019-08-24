const graphql = require('graphql');
const { GraphQLObjectType, GraphQLString, GraphQLID } = graphql;
const mongoose = require('mongoose');
const Song = mongoose.model('song');
const Lyric = mongoose.model('lyric');
const SongType = require('./song_type');
const LyricType = require('./lyric_type');
const config = {
    chart: {
        type: 'scatter',
        zoomType: 'xy'
    },
    title: {
        text: 'Timeline with Data Function Bubbles'
    },
    xAxis: {
        startOnTick: true,
        endOnTick: true,
        showLastLabel: true,
        type: 'datetime'
    },
    legend: {
        layout: 'vertical',
        align: 'left',
        verticalAlign: 'top',
        x: 100,
        y: 70,
        floating: true,
        backgroundColor: (Highcharts.theme && Highcharts.theme.legendBackgroundColor) || '#FFFFFF',
        borderWidth: 1
    },
    plotOptions: {
        scatter: {
            marker: {
                radius: 5,
                states: {
                    hover: {
                        enabled: true,
                        lineColor: 'rgb(100,100,100)'
                    }
                }
            },
            states: {
                hover: {
                    marker: {
                        enabled: false
                    }
                }
            },
            /* tooltip: {
                headerFormat: '<b>{series.name}</b><br>',
                pointFormat: '{point.x} cm, {point.y} kg'
            } */
        }
    },
    series: [{
        name: 'DG Operations',
        data: [
            {
                "x": 1483209000000,
                "y": 8
            },
            {
                "x": 1485887400000,
                "y": 10
            },
            {
                "x": 1488306600000,
                "y": 8
            },
            {
                "x": 1490985000000,
                "y": 9
            },
            {
                "x": 1493577000000,
                "y": 8
            },
            {
                "x": 1496255400000,
                "y": 7
            },
            {
                "x": 1498847400000,
                "y": 8
            },
            {
                "x": 1501525800000,
                "y": 7
            },
            {
                "x": 1504204200000,
                "y": 6
            },
            {
                "x": 1506796200000,
                "y": 8
            },
            {
                "x": 1509474600000,
                "y": 10
            },
            {
                "x": 1512066600000,
                "y": 13
            },
            {
                "x": 1514745000000,
                "y": 6
            },
            {
                "x": 1517423400000,
                "y": 3
            },
            {
                "x": 1519842600000,
                "y": 8
            },
            {
                "x": 1522521000000,
                "y": 3
            },
            {
                "x": 1525113000000,
                "y": 8
            },
            {
                "x": 1527791400000,
                "y": 7
            },
            {
                "x": 1530383400000,
                "y": 8
            },
            {
                "x": 1533061800000,
                "y": 13
            },
            {
                "x": 1535740200000,
                "y": 5
            },
            {
                "x": 1538332200000,
                "y": 8
            }
        ]
    }, {
        name: 'collibra DGC',
        data: [
            {
                "x": 1483209000000,
                "y": 3
            },
            {
                "x": 1485887400000,
                "y": 3
            },
            {
                "x": 1488306600000,
                "y": 9
            },
            {
                "x": 1490985000000,
                "y": 4
            },
            {
                "x": 1493577000000,
                "y": 5
            },
            {
                "x": 1496255400000,
                "y": 9
            },
            {
                "x": 1498847400000,
                "y": 6
            },
            {
                "x": 1501525800000,
                "y": 12
            },
            {
                "x": 1504204200000,
                "y": 12
            },
            {
                "x": 1506796200000,
                "y": 6
            },
            {
                "x": 1509474600000,
                "y": 9
            },
            {
                "x": 1512066600000,
                "y": 6
            },
            {
                "x": 1514745000000,
                "y": 9
            },
            {
                "x": 1517423400000,
                "y": 7
            },
            {
                "x": 1519842600000,
                "y": 10
            },
            {
                "x": 1522521000000,
                "y": 5
            },
            {
                "x": 1525113000000,
                "y": 3
            },
            {
                "x": 1527791400000,
                "y": 10
            },
            {
                "x": 1530383400000,
                "y": 14
            },
            {
                "x": 1533061800000,
                "y": 6
            },
            {
                "x": 1538332200000,
                "y": 5
            }
        ]
    }, {
        name: "Dk Discourse",
        data: [
            {
                "x": 1483209000000,
                "y": 7
            },
            {
                "x": 1485887400000,
                "y": 4
            },
            {
                "x": 1488306600000,
                "y": 6
            },
            {
                "x": 1490985000000,
                "y": 6
            },
            {
                "x": 1493577000000,
                "y": 6
            },
            {
                "x": 1496255400000,
                "y": 9
            },
            {
                "x": 1498847400000,
                "y": 9
            },
            {
                "x": 1501525800000,
                "y": 9
            },
            {
                "x": 1504204200000,
                "y": 3
            },
            {
                "x": 1506796200000,
                "y": 9
            },
            {
                "x": 1509474600000,
                "y": 6
            },
            {
                "x": 1512066600000,
                "y": 2
            },
            {
                "x": 1514745000000,
                "y": 9
            },
            {
                "x": 1517423400000,
                "y": 3
            },
            {
                "x": 1519842600000,
                "y": 6
            },
            {
                "x": 1522521000000,
                "y": 1
            },
            {
                "x": 1525113000000,
                "y": 8
            },
            {
                "x": 1527791400000,
                "y": 4
            },
            {
                "x": 1530383400000,
                "y": 7
            },
            {
                "x": 1533061800000,
                "y": 4
            },
            {
                "x": 1535740200000,
                "y": 6
            },
            {
                "x": 1538332200000,
                "y": 1
            }
        ]
    }]
}
const mutation = new GraphQLObjectType({
    name: 'Mutation',
    fields: {
        addSong: {
            type: SongType,
            args: {
                title: { type: GraphQLString }
            },
            resolve(parentValue, { title }) {
                return (new Song({ title })).save()
            }
        },
        addLyricToSong: {
            type: SongType,
            args: {
                content: { type: GraphQLString },
                songId: { type: GraphQLID }
            },
            resolve(parentValue, { content, songId }) {
                return Song.addLyric(songId, content);
            }
        },
        likeLyric: {
            type: LyricType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Lyric.like(id);
            }
        },
        deleteSong: {
            type: SongType,
            args: { id: { type: GraphQLID } },
            resolve(parentValue, { id }) {
                return Song.remove({ _id: id });
            }
        }
    }
});

module.exports = mutation;