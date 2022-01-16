# CodeX Academy

## Level Overview

{% for level in site.levels %}

### {{level.category}} {{ level.number }} 

{{ level.description | markdownify }}

<a href="{{level.pathway}}" target="_blank">
    <img src="{{level.badge_image}}" alt="Level {{level.number}} badge" width="150"/>
</a>


#### Skills:

{% for skill in level.skills %}
- {{skill.skill}} {% for badge in level.badges %}[badge]({{badge}}){% endfor %}{% endfor %}
{% endfor %}



