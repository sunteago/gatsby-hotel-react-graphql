exports.createPages = async ({ actions, graphql, reporter }) => {
    const result = await graphql(`
        query {
            allDatoCmsRoom {
                nodes {
                    slug
                }
            }
        }
    `)
    // console.log(result.data.allDatoCmsRoom.nodes);

    if (result.error) {
        reporter.panic('No results found', result.errors);
    }

    //si hay pags, crear archivos:


    const rooms = result.data.allDatoCmsRoom.nodes;
    rooms.forEach(room => {
        actions.createPage({
            path: room.slug,
            component: require.resolve('./src/components/rooms.js'),
            context: {
                slug: room.slug
            }
        })
    })
}