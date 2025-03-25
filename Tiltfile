deploy_env = os.getenv('DEPLOY_ENV', 'dev')
workers = int(os.getenv('WORKERS', '3'))
k8s_yaml('_kube/_node/cache.yaml')
allow_k8s_contexts('do-ams3-kubernetes-staging')

docker_build(
    'registry.gitlab.com/offertevergelijker/ov-fe-common/ov-studio',
    './',
    dockerfile='_kube/_node/Dockerfile',
    build_args={'BUILDKIT_INLINE_CACHE': '1'},
)

if(deploy_env == 'dev'):
    k8s_yaml('_kube/_node/ingress-dev.yaml')
else:
    k8s_yaml('_kube/_node/ingress-prod.yaml')

k8s_yaml('_kube/_node/deployment.yaml')
