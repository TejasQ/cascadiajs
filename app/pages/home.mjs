const IN_PERSON_RELEASE_IDS = [1469997, 1487843, 1489836, 1492670, 1484904, 1484368, 1484705]

export default function ({ html, state }) {
    const userName = state?.store?.userName
    const ticketId = state?.store?.ticketId
    const releaseId = state?.store?.releaseId
    return html`
    <main-layout>
        <simple-page title="Hello ${ userName.first_name }!">
            <h2>Virtual Ticket</h2>
            <p><img width="500" src="/ticket?image=true&ticketId=${ ticketId }" /></p>
            <p>
                <a target="_blank" href="https://twitter.com/intent/tweet?text=I%20just%20bought%20a%20ticket%20to%20%23CascadiaJS%202024!%20If%20you%20register%20using%20my%20virtual%20ticket%20link%2C%20you%27ll%20save%2035%25!%0A%0Ahttps%3A%2F%2Fcascadiajs.com%2Ftickets%3Fticket_id%3D${ ticketId }">Share on Twitter</a>
                <a target="_blank" href="/ticket?ticketId=${ ticketId }">Direct Link</a>
            </p>
            <h2>Talk Track</h2>
            <p>You can always find the updated schedule of talk <a href="/2024/schedule">here</a> and all of them will be streaming LIVE right here on 6/20 and 6/21.</p>
            ${ IN_PERSON_RELEASE_IDS.includes(releaseId) 
                ? html`
            <h2>Workshop Track</h2>
            <p>All the workshop below are free and included in your ticket. Space is limited, so RSVP to reserve your seat!</p>
            <table class="styled-table">
                <thead>
                    <tr><th>Date/Time</th><th>Workshop</th><th>RSVP</th></tr>
                </thead>
                <tr><td>6/20 morning</td><td>TBD</td><td></td></tr>
                <tr><td>6/20 afternoon</td><td>TBD</td><td></td></tr>
                <tr><td>6/21 morning</td><td>TBD</td><td></a></td></tr>
                <tr><td>6/21 afternoon</td><td><a href="/2024/workshops/building-ai-apps">Building a GenAI enabled web experience</a></td><td><a target="_blank" href="https://ti.to/event-loop/cascadiajs-2024/with/jtfbxvrrrfe">RSVP</a></td></tr>
            </table>` 
                : ``}
            <h2>Hallway Track</h2>
            <p>Our hallway track is where you can meet other attendees, chat with speakers, and participate in other fun activities. If you're joining us virtually, make sure to <a target="_blank" href="https://discord.gg/kkYR86GM29">join our Discord</a>!</p>            
            ${ IN_PERSON_RELEASE_IDS.includes(releaseId) 
                ? html`
            <h2>Post-Conference Activity Day</h2>
            <p>All the workshop below are free and included in your ticket. Space is limited, so RSVP to reserve your seat!</p>
            <table class="styled-table">
                <thead>
                    <tr><th>Activity</th><th>Location</th><th>RSVP</th></tr>
                </thead>
                <tr><td>5K Fun Run</td><td>Greenlake</td><td><a target="_blank" href="https://lu.ma/65nqcezz">RSVP</a></td></tr>
                <tr><td>Pickle Ball</td><td>Miller Park</td><td><a target="_blank" href="https://lu.ma/84v4ndmr">RSVP</a></td></tr>
                <tr><td>Space Needle</td><td>Seattle Center</td><td>RSVP TBD</td></tr>
                <tr><td>Dog romp</td><td>Magnuson Park off-leash dog park</td><td><a target="_blank" href="https://lu.ma/uy7jhx9r">RSVP</a></td></tr>
            </table>` 
            : ``}
            <div class="cta secondary"><a href="/logout">Logout</a></div>
        </simple-page>
    </main-layout>
    `
}