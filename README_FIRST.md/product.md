# LeadPilot Product Documentation

This document describes the product requirements, target audience, positioning, and feature mappings for LeadPilot.

---

## 1. Product Vision & Target Audience
LeadPilot is built for high-growth B2B technology startups, mid-market sales organizations, and enterprise revenue operations (RevOps) teams.

### User Personas
* **RevOps Leader (Sarah)**: Wants to eliminate routing errors and ensure qualified enterprise leads are distributed to account executives instantly based on active CRM ownership logs.
* **Sales Representative (Alex)**: Wants meetings scheduled without back-and-forth emails, pre-qualified, and matched to their calendar territory.
* **Marketing Director (David)**: Wants scheduling interfaces that reflect the company's brand guidelines (logo, color preset themes, matching typography).

---

## 2. Problems LeadPilot Solves
1. **Speed to Lead**: Research shows leads contacted within 5 minutes convert 10x better. LeadPilot qualifies and routes inbound leads instantly at the point of scheduling.
2. **Brand Consistency**: Most booking tools crop logo headers or force uniform layouts. LeadPilot supports highly customized style presets.
3. **CRM Synchronization**: Manual entry causes pipeline delays. LeadPilot automatically captures lead status, owner, and deal values.

---

## 3. Product Features & User Flows

### A. Branded Booking Flow
1. **Form Entry**: Prospect fills out fields (Email, Company Size, Revenue).
2. **Dynamic Calendar**: Renders active monthly calendars mapping available times and zones.
3. **Theme Customization**: Presets switcher allows teams to toggle brand themes (Purple, Pink, Cream, Dark) to match their corporate stylesheet.

### B. Qualification & Lead Routing Flow
1. **Qualification Engine**: Real-time evaluation of form inputs.
2. **Ownership Matching**: Checks active CRM records for account owners.
3. **Round Robin Allocation**: If no owner is assigned, routes meetings equally among eligible sales representatives.
4. **Instant Assignment Notification**: Rings the representative's dashboard with sound cues and online status indicator adjustments.

### C. Pipeline Capture Flow
1. **Record creation**: Meeting booking triggers instant lead record updates in CRM.
2. **Reminder Sequence**: Schedules Email 1 (24h before), Email 2 (1h before), and SMS (15m before) notifications.
3. **Pipeline Sync Confirmation**: Renders sync success indicators inside representative logs.
