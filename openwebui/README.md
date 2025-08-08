## Tushar's Chat Instance

This is a OpenWebUI instance running on my local machine with LiteLLM as the router for all the models. This also serves as a testbed for new models and features.

### Running
Please make your own .env file with all the required API keys. You can see what providers are used by looking at the config.yml file. You can remove or add providers also in the config.yml file.

Also there's a .env file that you can use as a template.

Then run:
```bash
docker compose up -d
```

After that you can access the OpenWebUI at http://localhost:3069

You can also access LiteLLM at http://localhost:4000