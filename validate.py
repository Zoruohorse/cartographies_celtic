import json
from pathlib import Path
r=Path(__file__).parent;L=lambda p:json.loads((r/p).read_text(encoding='utf-8'))
a=L('data/actors.json');c=L('data/claims.json');e=L('data/evidence.json');rs=L('data/relations.json');s=L('data/sources.json');t=L('config/taxonomy.json');m=L('data/meta.json')
for name,xs in [('actors',a),('claims',c),('evidence',e),('relations',rs),('sources',s)]:assert len({x['id'] for x in xs})==len(xs),name
A={x['id'] for x in a};E={x['id'] for x in e};S={x['id'] for x in s}
for x in a:assert set(x['categories'])<=set(t['categories']),x['id']
for x in c:assert x['subject_id'] in A and x['project_id'] in A and x['value'] in t['stances'] and x['certainty'] in t['certainty_levels'] and set(x['evidence_ids'])<=E,x['id']
for x in e:assert not x.get('source_id') or x['source_id'] in S,x['id']
for x in rs:assert x['source_id'] in A and x['target_id'] in A and x['type'] in t['relation_types'] and set(x['evidence_ids'])<=E,x['id']
for x in m.get('griefs',[]):assert set(x.get('evidence_ids',[]))<=E and set(x.get('source_ids',[]))<=S
for x in m.get('vigilance_evidence_ids',[]):assert set(x)<=E
print(f'OK: {len(a)} acteurs, {len(c)} positions, {len(rs)} relations, {len(e)} preuves, {len(s)} sources')
