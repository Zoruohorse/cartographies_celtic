import json
from pathlib import Path
r=Path(__file__).parent
L=lambda p:json.loads((r/p).read_text(encoding="utf-8"))
a=L("data/actors.json");c=L("data/claims.json");e=L("data/evidence.json");rs=L("data/relations.json");s=L("data/sources.json");t=L("config/taxonomy.json");co=L("data/content.json")
A={x["id"] for x in a};E={x["id"] for x in e};S={x["id"] for x in s}
assert len(A)==len(a) and len(E)==len(e) and len(S)==len(s)
for x in c: assert x["subject_id"] in A and set(x.get("evidence_ids",[]))<=E and x["value"] in t["stances"]
for x in rs: assert x["source_id"] in A and x["target_id"] in A and set(x.get("evidence_ids",[]))<=E
for x in e: assert x.get("source_id") is None or x["source_id"] in S
for x in a: assert all(k in t["categories"] for k in x.get("categories",[]))
assert not any("châteauroux" in p.read_text(encoding="utf-8").lower() or "ozans" in p.read_text(encoding="utf-8").lower() for p in r.rglob("*") if p.is_file() and p.suffix in {".html",".js",".json",".md"})
print(f"OK: {len(a)} entités, {len(c)} positions, {len(rs)} relations, {len(e)} preuves, {len(s)} sources")
